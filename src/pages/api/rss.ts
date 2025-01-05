import { NextApiRequest, NextApiResponse } from "next";
import RSSParser from "rss-parser";
import axios from "axios";
import * as cheerio from "cheerio";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

const fetchImageFromArticle = async (url: string): Promise<string | null> => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Get Open Graph image or fallback to first <img>
    const ogImage = $('meta[property="og:image"]').attr("content");
    const firstImage = $("img").attr("src");
    return ogImage || firstImage || null;
  } catch (error) {
    console.error(`Failed to fetch image from ${url}:`, error);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parser = new RSSParser<FeedItem>();
  const feedUrl = "https://www.mining.com/feed";

  try {
    const feed = await parser.parseURL(feedUrl);

    const itemsWithImages = await Promise.all(
      feed.items.map(async (item) => {
        const imageUrl = await fetchImageFromArticle(item.link || "");
        return {
          ...item,
          imageUrl,
        };
      })
    );

    res.status(200).json(itemsWithImages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}

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

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

const fetchImageFromArticle = async (url: string): Promise<string | null> => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });
    const $ = cheerio.load(data);
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
  const feedUrl = "https://www.mining.com/region/africa/feed";

  try {
    const feedResponse = await axios.get(feedUrl, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    const feed = await parser.parseString(feedResponse.data);

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
    console.error("Error fetching RSS feed:", error);
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}

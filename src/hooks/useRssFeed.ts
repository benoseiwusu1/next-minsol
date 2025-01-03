import { useState, useEffect } from "react";
import Parser from "rss-parser";

const useRssFeed = (url: string) => {
  const [feed, setFeed] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      const parser = new Parser();
      try {
        // Fetch RSS feed
        const fetchedFeed = await parser.parseURL(url);
        setFeed(fetchedFeed);
        console.log("Fetching feed from:", url);
        console.log("Feed data:", fetchedFeed);
      } catch (err: any) {
        console.error("Error fetching RSS feed", err);
        setError("Error fetching RSS feed");
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [url]);

  return { feed, loading, error };
};

export default useRssFeed;

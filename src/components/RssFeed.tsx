import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import moment from "moment";
import Link from "next/link";

const formatDate = (dateString: string): string => {
  return moment(dateString).format("MMMM Do, YYYY"); // e.g., "January 3rd, 2025"
};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

export default function RssFeed() {
  const [rssData, setRssData] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRss = async () => {
      try {
        const response = await fetch("/api/rss");
        if (!response.ok) {
          throw new Error("Failed to fetch RSS feed");
        }
        const data: FeedItem[] = await response.json();
        setRssData(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchRss();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">{"News"}</h2>
          <Link
            href="/newsroom"
            className="text-secondary font-semibold flex items-center"
          >
            More &rarr;
          </Link>
        </div>
        {error ? (
          <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rssData.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                date={formatDate(item.pubDate || "")}
                category="Mining" // Replace with actual category if available
                imageUrl={item.imageUrl || "/placeholder-image.jpg"} // Provide fallback
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

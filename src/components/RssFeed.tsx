import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import moment from "moment";
import Link from "next/link";
import { NewsPlaceHolder } from "./NewsPlaceHolder";

const formatDate = (dateString: string): string => {
  return moment(dateString).format("MMMM Do, YYYY");
};

type FeedItem = {
  title: string;
  link: string;
  categories?: string[];
  contentSnippet?: string;
  pubDate?: string;
  imageUrl?: string;
};

// const SkeletonCard: React.FC = () => {
//   return (
//     <div className="animate-pulse bg-gray-200 rounded-lg shadow-md p-4">
//       <div className="h-48 bg-gray-300 rounded mb-4"></div>
//       <div className="h-6 bg-gray-300 rounded mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//     </div>
//   );
// };

export default function RssFeed() {
  const [rssData, setRssData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log(rssData);

  useEffect(() => {
    const fetchRss = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/rss");
        if (!response.ok) {
          setLoading(false);
          throw new Error("Failed to fetch RSS feed");
        }
        const data: FeedItem[] = await response.json();
        setLoading(false);
        setRssData(data);
      } catch (err) {
        setLoading(false);
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
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <NewsPlaceHolder key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rssData.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                date={formatDate(item.pubDate || "")}
                categories={item.categories}
                imageUrl={item.imageUrl || "/placeholder-image.jpg"}
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

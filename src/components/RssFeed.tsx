import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import NewsCard from "./NewsCard";
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

const fetchRss = async (): Promise<FeedItem[]> => {
  const response = await fetch("/api/rss");
  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }
  return response.json();
};

export default function RssFeed() {
  const {
    data: rssData = [],
    isLoading,
    isError,
    error,
  } = useQuery<FeedItem[]>({
    queryKey: ["rssFeed"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <section className="py-12 bg-white">
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

        {isError ? (
          <p style={{ color: "red", textAlign: "center" }}>
            Error: {error?.message}
          </p>
        ) : isLoading ? (
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

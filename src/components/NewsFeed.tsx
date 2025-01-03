import React from "react";
import useRssFeed from "../hooks/useRssFeed";

const NewsFeed: React.FC = () => {
  // Replace with the actual mining.com feed URL
  const feedUrl = "https://www.mining.com/feed";

  const { feed, error, loading } = useRssFeed(feedUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Mining News</h2>
      {feed && feed.items && (
        <ul>
          {feed.items.map((item: any, index: number) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.contentSnippet}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;

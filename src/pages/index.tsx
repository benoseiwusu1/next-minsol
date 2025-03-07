import HeroSlider from "@/components/HeroSlider";
import Solutions from "@/components/Solutions";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import SolutionDetails from "@/components/SolutionDetails";
import Pillars from "@/components/Pillars";
import Clients from "@/components/Clients";
import RssFeed from "@/components/RssFeed";
import Head from "next/head";

export default function Home() {
  const { openSheet } = useModal();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleDialogOpen = (item: any) => {
    setSelectedItem(item);
    openSheet();
  };
  return (
    <div>
      <Head>
        <title>Minsol Limited - Mining Consultancy & Logistics Experts</title>
        <meta
          name="description"
          content="Minsol Limited provides professional mining consultancy and logistics solutions in Ghana, West Africa Explore our expert services."
        />
        <meta
          name="keywords"
          content="Minsol, mining consultancy, logistics, Ghana, West Africa, mineral exploration, supply chain"
        />
        <meta name="author" content="Minsol Limited" />
        <meta
          property="og:title"
          content="Minsol Limited - Mining & Logistics Experts"
        />
        <meta
          property="og:description"
          content="Learn about Minsol Limited's industry-leading mining consultancy and logistics services."
        />
        <meta property="og:image" content="/public/minsol-banner.jpg" />
        <meta property="og:url" content="https://www.minsolltd.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HeroSlider />
      <Solutions onSolutionClick={handleDialogOpen} />
      <SolutionDetails selectedItem={selectedItem} />
      <RssFeed />
      <Pillars />
      <Clients />
    </div>
  );
}

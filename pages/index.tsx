import { useEffect } from "react";
import AOS from "aos";
import NavBar from "./components/organism/NavBar";
import MainBanner from "./components/organism/MainBanner";
import TransactionStep from "./components/organism/TransactionStep";
import FeaturedGames from "./components/organism/FeaturedGames";
import Reach from "./components/organism/Reach";
import Story from "./components/organism/Story";
import Footer from "./components/organism/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames />
      <Reach />
      <Story />
      <Footer />
    </>
  );
}

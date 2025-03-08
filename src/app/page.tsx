import DownloadApp from "./components/Download";
import ExploreCities from "./components/Explore";
import Hero from "./components/Hero";
import WhyPlotXpert from "./components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPlotXpert />
      <ExploreCities />
      <DownloadApp />
    </>
  );
}

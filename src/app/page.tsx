import Create from "./Home/components/Create";
import HeroSection from "./Home/components/HeroSection";
import About from "./Home/components/About";
import UploadsSection from "./Home/components/UploadsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />;
      <UploadsSection />
      <About />
      <Create />
    </main>
  );
}

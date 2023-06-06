import Image from "next/image";
import Slider from "../components/Slider";
import About from "../components/homeSections/About";
import Popular from "../components/homeSections/Popular";
import Instagram from "../components/homeSections/Instagram";

//HomePage
export default function Home() {
  return (
    <div className="bg-bg-h">
      <Slider />
      <About />
      <Instagram />
      <Popular />
    </div>
  );
}

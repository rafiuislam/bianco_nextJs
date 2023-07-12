import Hero from "../components/homeSections/Hero";
import About from "../components/homeSections/About";
// import Popular from "../components/homeSections/Popular";
import Instagram from "../components/homeSections/Instagram";
import Shop from "../components/homeSections/Shop";
import Biancaffe from "../components/homeSections/Biancaffe";
// import Biancaffe2 from "../components/homeSections/Biancaffe2";

//HomePage
export default function Home() {
  return (
    <div className="bg-bg-h overflow-y-hidden">
      <Hero />
      <Biancaffe />
      {/* <Biancaffe2 /> */}
      <Shop />
      <About />
      <Instagram />
      {/* <Popular /> */}
    </div>
  );
}

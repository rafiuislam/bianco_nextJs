import Hero from "../components/homeSections/Hero";
import About from "../components/homeSections/About";
// import Popular from "../components/homeSections/Popular";
import Instagram from "../components/homeSections/Instagram";
import Shop from "../components/homeSections/Shop";
import Biancaffe from "../components/homeSections/Biancaffe";

//HomePage
export default function Home() {
  return (
    <div className="bg-bg-h overflow-y-hidden">
      <Hero />

      <Biancaffe />

      <Shop />

      <About />

      <Instagram />
      {/* <Popular /> */}
    </div>
  );
}

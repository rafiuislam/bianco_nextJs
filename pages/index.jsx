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
      <div className="transition-all duration-500">
        <Hero />
      </div>
      <div className="transition-all duration-500">
        <Biancaffe />
      </div>
      <div className="transition-all duration-500">
        <Shop />
      </div>
      <div className="transition-all duration-500">
        <About />
      </div>
      <Instagram />
      {/* <Popular /> */}
    </div>
  );
}

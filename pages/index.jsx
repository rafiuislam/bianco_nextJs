import Hero from "../components/homeSections/Hero";
import About from "../components/homeSections/About";
import Instagram from "../components/homeSections/Instagram";
import Shop from "../components/homeSections/Shop";
import Biancaffe from "../components/homeSections/Biancaffe";
import { fetchDataFromApi } from "@/utils/api";
import { getSeoByPageName } from "../services/auth";

import { NextSeo } from "next-seo";

//HomePage
export default function Home({ products, seo }) {
  console.log(seo.attributes.title);
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };
  // console.log(seo.attributes.alt03);

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className="bg-bg-h overflow-y-hidden"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Hero img={seo.attributes} alt={seo.attributes.alt} />
        <Biancaffe alt={seo.attributes} />
        <About alt={seo.attributes.alt04} />
        <Shop products={products} />
        <Instagram />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const seo = await getSeoByPageName("Home");
  return {
    props: { products, seo },
  };
}

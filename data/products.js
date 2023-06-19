import shopImg1 from "../public/img_shop/1.png";
import shopImg2 from "../public/img_shop/2.png";
import shopImg3 from "../public/img_shop/3.png";
import shopImg4 from "../public/img_shop/4.png";
import shopImg5 from "../public/img_shop/5.png";
import shopImg6 from "../public/img_shop/6.png";

export const products = [
  {
    id: 1,
    name: "Bianco N.1",
    href: "/product/1",
    imageSrc: shopImg1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3500",
    desc: "Discover the exceptional taste of our Bianco N.1 coffee. Crafted with care. Experience pure enjoyment without the caffeine.",
    inStock: true,
    beanType: "Arabica",
    packageOption: "500g",
    roastProfile: "Medium",
  },
  {
    id: 2,
    name: "Bianco N.2",
    href: "/product/2",
    imageSrc: shopImg2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3700",
    desc: "Enjoy the rich and bold flavor of our Bianco N.2 coffee. Indulge in the perfect cup any time of the day.",
    inStock: false,
    beanType: "Robusta",
    packageOption: "1kg",
    roastProfile: "Dark",
  },
  {
    id: 3,
    name: "Bianco N.Gourmet",
    href: "/product/3",
    imageSrc: shopImg3,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3300",
    desc: "Enjoy the rich and bold flavor of our Bianco N.Gourmet 1 coffee. Indulge in the perfect cup any time of the day.",
    inStock: true,
    beanType: "Gourmet Blend",
    packageOption: "500g",
    roastProfile: "Light",
  },
  {
    id: 4,
    name: "Bianco N.Decaffeinato",
    href: "/product/4",
    imageSrc: shopImg4,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3100",
    desc: "Enjoy the rich and bold flavor of our Bianco N.Decaffeinato 1 coffee. Indulge in the perfect cup any time of the day.",
    inStock: true,
    beanType: "Decaf",
    packageOption: "1kg",
    roastProfile: "Extra dark",
  },
  {
    id: 5,
    name: "Bianco N.2.Decaffeinato",
    href: "/product/5",
    imageSrc: shopImg5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3699",
    desc: "Discover the exceptional taste of our Bianco N.2.Decaffeinato coffee. Experience pure enjoyment without the caffeine.",
    inStock: false,
    beanType: "Decaf",
    packageOption: "500g",
    roastProfile: "Medium",
  },
  {
    id: 6,
    name: "Bianco N.2.Gourment",
    href: "/product/6",
    imageSrc: shopImg6,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3900",
    desc: "Discover the exceptional taste of our Bianco N.2.Gourment coffee. Crafted with care. Experience pure enjoyment without the caffeine.",
    inStock: true,
    beanType: "Gourmet Blend",
    packageOption: "1kg",
    roastProfile: "Dark",
  },
  // More products...
];

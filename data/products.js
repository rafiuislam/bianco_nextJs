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
    desc: "Blend : 100% Arabica Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 1000 gr.",
    inStock: true,
    beanType: "Arabica",
    packageOption: "500g",
    roastProfile: "Medium",
    details:
      "This unique blend is made with only Arabica beans sourced from the finest cultivators of Central and South America. Arabica beans are noted for their fruity and chocolatey notes that provide a smooth, rich taste like no other. The Bianco N° 1 blend accentuates these flavour profiles and offers a refreshing fruity aroma and a pleasant cacao-like aftertaste.",
  },
  {
    id: 2,
    name: "Bianco N.2",
    href: "/product/2",
    imageSrc: shopImg2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3700",
    desc: "Blend : 80% Arabica & 20% Robusta Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 1000 gr.",
    inStock: false,
    beanType: "Robusta",
    packageOption: "1kg",
    roastProfile: "Dark",
    details:
      "By combining Arabica and Robusta beans, the Bianco N° 2 blend combines the best of both worlds. The Arabica beans provide fruity hints while the Robusta beans - as the name suggests, bring in a more robust essence of coffee. This results in a well-balanced blend with an intricate flavour profile. The Arabica and Robusta beans interact with each other and the medium roast brings out floral notes, with an aftertaste of toasted bread, caramel and chocolate.",
  },
  {
    id: 3,
    name: "Bianco Speciality Gourmet",
    href: "/product/3",
    imageSrc: shopImg3,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3300",
    desc: "Blend : 100% Arabica Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 500 gr.",
    inStock: true,
    beanType: "Gourmet Blend",
    packageOption: "500g",
    roastProfile: "Light",
    details:
      "This excellent coffee is sourced from the finest plantations across the globe. Through a slow roasting process, the beans preserve their distinctive qualities, reflecting the nuances of the soil, climate, and cultivation methods. True coffee connoisseurs can indulge in its unique properties.",
  },
  {
    id: 4,
    name: "Bianco Decaffeinated",
    href: "/product/4",
    imageSrc: shopImg4,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3100",
    desc: "Blend : 70% Arabica & 30% Robusta Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 500 gr",
    inStock: true,
    beanType: "Decaf",
    packageOption: "1kg",
    roastProfile: "Extra dark",
    details:
      "Bianco decaffeinated is a caffeine-free coffee with a delightful fusion of chocolate and nut flavours. It is made from carefully selected beans, resulting in a delightful blend with subtle fruity notes. What makes it unique is the chemical-free aqueous decaffeination process.",
  },
  {
    id: 5,
    name: "Bianco N.2.Decaffeinato",
    href: "/product/5",
    imageSrc: shopImg5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3699",
    desc: "Blend : 70% Arabica & 30% Robusta Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 500 gr",
    inStock: false,
    beanType: "Decaf",
    packageOption: "500g",
    roastProfile: "Medium",
    details:
      "Bianco decaffeinated is a caffeine-free coffee with a delightful fusion of chocolate and nut flavours. It is made from carefully selected beans, resulting in a delightful blend with subtle fruity notes. What makes it unique is the chemical-free aqueous decaffeination process.",
  },
  {
    id: 6,
    name: "Bianco N.2.Gourment",
    href: "/product/6",
    imageSrc: shopImg6,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "3900",
    desc: "Blend : 100% Arabica Roast : Medium Roast (210° C - 219 ° C Temperature) Format: 500 gr.",
    inStock: true,
    beanType: "Gourmet Blend",
    packageOption: "1kg",
    roastProfile: "Dark",
    details:
      "This excellent coffee is sourced from the finest plantations across the globe. Through a slow roasting process, the beans preserve their distinctive qualities, reflecting the nuances of the soil, climate, and cultivation methods. True coffee connoisseurs can indulge in its unique properties.",
  },
  // More products...
];

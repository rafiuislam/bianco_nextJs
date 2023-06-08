import React from "react";
import IgImg1 from "../../public/insta_img/Insta_1.jpg";
import IgImg2 from "../../public/insta_img/Insta_2.jpg";
import IgImg3 from "../../public/insta_img/Insta_3.jpg";
import IgImg4 from "../../public/insta_img/Insta_4.jpg";
import IgImg5 from "../../public/insta_img/Insta_5.jpg";
import IgImg6 from "../../public/insta_img/Insta_6.jpg";
import IgImg7 from "../../public/insta_img/Insta_7.jpg";
import IgImg8 from "../../public/insta_img/Insta-8.jpg";
import InstagramImg from "./InstagramImg";
import SlideUp from "../animate/SlideUp";

const Instagram = () => {
  return (
    <section id="instagram" className="container mx-auto text-center py-4">
      <SlideUp offset="-300px 0px -300px 0px">
        <p className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Follow me on Instagram
        </p>
      </SlideUp>
      {/* <p className="pb-4">@Captur</p> */}
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 p-8 lg:px-24 animate-slideUpCubiBezier ">
          <InstagramImg socialImg={IgImg1} />
          <InstagramImg socialImg={IgImg2} />
          <InstagramImg socialImg={IgImg3} />
          <InstagramImg socialImg={IgImg4} />
          <InstagramImg socialImg={IgImg5} />
          <InstagramImg socialImg={IgImg6} />
          <InstagramImg socialImg={IgImg7} />
          <InstagramImg socialImg={IgImg8} />
        </div>
      </SlideUp>
    </section>
  );
};

export default Instagram;

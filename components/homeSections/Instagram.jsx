import React from "react";
import IgImg1 from "../../public/insta_img/ig-img-1.jpeg";
import IgImg2 from "../../public/insta_img/ig-img-2.jpeg";
import IgImg3 from "../../public/insta_img/ig-img-3.jpeg";
import IgImg4 from "../../public/insta_img/ig-img-4.jpeg";
import IgImg5 from "../../public/insta_img/ig-img-5.jpeg";
import IgImg6 from "../../public/insta_img/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";
import SlideUp from "../animate/SlideUp";

const Instagram = () => {
  return (
    <section id="instagram" className="max-w-[1240px] mx-auto text-center py-4">
      <SlideUp offset="-300px 0px -300px 0px">
        <p className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Follow me on Instagram
        </p>
      </SlideUp>
      {/* <p className="pb-4">@Captur</p> */}
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4  animate-slideUpCubiBezier ">
          <InstagramImg socialImg={IgImg1} />
          <InstagramImg socialImg={IgImg2} />
          <InstagramImg socialImg={IgImg3} />
          <InstagramImg socialImg={IgImg4} />
          <InstagramImg socialImg={IgImg5} />
          <InstagramImg socialImg={IgImg6} />
        </div>
      </SlideUp>
    </section>
  );
};

export default Instagram;

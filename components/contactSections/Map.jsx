import React from "react";
import FadeAndScale from "../animate/FadeAndScale";

const Map = () => {
  return (
    <div className="px-4 mx-auto sm:w-full md:w-3/4 lg:w-4/5 xl:w-2/3">
      <FadeAndScale offset="-300px 0px -300px 0px">
        <div className="animate-fadeIn square-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5079538534596!2d90.3886021754057!3d23.87160018411252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5670dc4e49f%3A0x476dd7a7caf56cb0!2sTropical%20Shormi%20Center!5e0!3m2!1sen!2sbd!4v1686459039446!5m2!1sen!2sbd"
            className="w-full aspect-w-1 aspect-h-1 sm:h-56 md:h-64 lg:h-64 xl:h-80 pb-5"
            style={{ border: "" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeAndScale>
    </div>
  );
};

export default Map;

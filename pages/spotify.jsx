import React from "react";

const spotify = () => {
  return (
    <div>
      <h1 className="text-2xl h-screen m-5">
        {/* <iframe
          title="Spotify Web Player"
          src="https://open.spotify.com/embed/artist/7Ln80lUS6He07XvHI8qqHH?utm_source=generator"
          width="300"
          height="380"
          allow="encrypted-media"
        ></iframe> */}
        <iframe
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/46C8kZSKeZeViRFotyXrTE?utm_source=generator"
          width="400"
          height="352"
          // frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div class="grid grid-rows-4 gap-2 pb-2">
          <div class="bg-primary/20">Item 1</div>
          <div class="bg-secondary/20 row-span-2">Item 2</div>
          <div class="bg-primary/20 row-span-3">Item 3</div>
          {/* <div class="bg-black/20 col-span-3">Item 4</div>
          <div class="bg-red/20">Item 5</div> */}
        </div>
        ashfb
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-primary/20 grid place-content-center">Item 1</div>

          <div class="bg-primary/20 grid place-content-end">Item 3</div>
        </div>
      </h1>
      ;
    </div>
  );
};

export default spotify;

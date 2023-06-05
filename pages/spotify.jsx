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
          src="https://open.spotify.com/embed/playlist/05OkqemhVmD27zXfdnyNsy?utm_source=generator"
          width="400"
          height="352"
          // frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </h1>
      {/* <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500 via-yellow-300 to-amber-500">
        <div class="mx-24 md:mx-0 max-w-screen-sm">
          <div class="space-y-10 text-gray-800 font-dancing font-bold">
            <p
              class="
                inline-block
               
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-secondary
                before:via-slate-400
                before:to-white
                hover:before:w-full
                hover:before:opacity-100
        "
            >
              Sample Underlined Text Goes Here
            </p>
            <p
              class="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:right-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
        "
            >
              Sample Underlined Text Goes Here
            </p>
            <p
              class="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
        "
            >
              Sample Underlined Text Goes Here
            </p>
            <p class="text-3xl">
              Lorem ipsum dolor sit amet consectetur{" "}
              <a
                href=""
                class="bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500"
              >
                {" "}
                adipisicing elit. Repellat rerum sint cupiditate ad, neque
                nulla, illo, quaerat culpa
              </a>{" "}
              quasi non dolorem aliquid consequuntur et?
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default spotify;

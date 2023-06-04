import React from "react";

const spotify = () => {
  return (
    <div>
      <h1 className="text-2xl h-screen m-5">
        <iframe
          title="Spotify Web Player"
          src="https://open.spotify.com/embed/artist/7Ln80lUS6He07XvHI8qqHH?utm_source=generator"
          width="300"
          height="380"
          allow="encrypted-media"
        ></iframe>
      </h1>
    </div>
  );
};

export default spotify;

"use client";

import movieTrailer from "movie-trailer";

const { useEffect, useState } = require("react");
const { default: ReactPlayer } = require("react-player");

const PlayTrailer = ({ movieName, handleTrailer }) => {
  const [videoURL, setVideoURL] = useState();
  useEffect(() => {
    movieTrailer(movieName).then((res) => {
      setVideoURL(res);
    });
  });
  return (
    <div className="w-[80%] h-[800px] bg-black absolute top-7">
      <button onClick={handleTrailer} className="text-lg text-white">
        close
      </button>
      <ReactPlayer
        width={"100%"}
        height={"80%"}
        url={videoURL}
        controls={true}
      />
    </div>
  );
};
export default PlayTrailer;

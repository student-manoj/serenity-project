"use client";

import Image from "next/image";
import playicon from "../../public/playicon.png";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoPlayBtn = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="asUN0c94xnY"
        onClose={() => setOpen(false)}
      />
      <Image
        onClick={() => setOpen(true)}
        src={playicon}
        alt="playicon"
        className="absolute top-[40%] right-[45%]"
      />
    </>
  );
};

export default VideoPlayBtn;

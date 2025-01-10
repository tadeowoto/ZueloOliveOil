import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title="Zuelo - Aceite de oliva virgen extra"
        src="https://www.youtube.com/embed/MsoRaXzSQts?playlist=MsoRaXzSQts&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&wmode=transparent"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;


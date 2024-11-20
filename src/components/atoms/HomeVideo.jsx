export function HomeVideo() {
  return (
    <div className="home-video">
      <div className="vc_video-bg">
        <iframe
          className="inner"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Zuelo - Aceite de oliva virgen extra"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/MsoRaXzSQts?playlist=MsoRaXzSQts&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&wmode=transparent&origin=https://zuelo.com.ar&widgetid=1"
          style={{
            maxWidth: "1000%",
            marginLeft: "-161px",
            marginTop: "0px",
            width: "1278.22px",
            height: "719px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

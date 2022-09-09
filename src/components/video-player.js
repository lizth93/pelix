import { API_YOUTUBE_URL } from "../config";

const VideoPlayer = (props) => {
  return (
    <iframe
      className={props.className}
      width="720"
      height="405"
      src={`${API_YOUTUBE_URL}${props.video.key}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  );
};

export default VideoPlayer;

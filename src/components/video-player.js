import { API_YOUTUBE_URL } from "constants";
import styled from "styled-components";

const VideoPlayer = (props) => {
  return (
    <iframe
      className={props.className}
      width={props.width}
      height={props.height}
      src={`${API_YOUTUBE_URL}${props.video.key}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  );
};

export default styled(VideoPlayer)`
  @media (max-width: 81.25em) {
    //1300px
    width: 854px;
    height: 480px;
  }

  @media (max-width: 56.25em) {
    //1300px
    width: 720px;
    height: 405px;
  }
  @media (max-width: 43.75em) {
    //1300px
    width: 426px;
    height: 240px;
  }
  @media (max-width: 25em) {
    //400
    width: 300px;
    height: auto;
  }
`;

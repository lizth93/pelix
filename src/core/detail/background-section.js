import styled from "styled-components";
// Own
import { BASE_URL_IMG, SIZE_IMAGE } from "constants";

const BackgroundSection = styled.section`
  background-image: linear-gradient(
      to right bottom,
      rgba(11, 114, 133, 0.8),
      rgba(11, 114, 133, 0.65)
    ),
    url(${(props) => BASE_URL_IMG + SIZE_IMAGE + props.image});
`;

export default BackgroundSection;

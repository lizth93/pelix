import BoobstrapCarousel from "react-bootstrap/Carousel";

function CarrouselCollections(props) {
  return <BoobstrapCarousel slide={false}>{props.children}</BoobstrapCarousel>;
}

export default CarrouselCollections;

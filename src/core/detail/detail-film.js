import { useSelector } from "react-redux";

// Own
import useInitialiceDetails from "core/main/use-initialice-videos";
import BackgroundSection from "./background-section";
import HeroDescription from "core/detail/hero/";

const DetailFilm = (props) => {
  useInitialiceDetails();

  const { currentFilm } = useSelector((state) => ({
    currentFilm: state.detailsCollection.currentFilm,
  }));

  return (
    <BackgroundSection
      image={currentFilm.backdrop_path}
      className={props.className}
    >
      <div className="container">
        <HeroDescription />
      </div>
    </BackgroundSection>
  );
};
export default DetailFilm;

import { useSelector } from "react-redux";
import { useState } from "react";
//own
import ButtonsGroup from "components/btn-group/";
import Film from "components/films";
import Spinner from "components/spinner";
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import PlayIcon from "icons/play";
import useInitialiceAdvances from "../use-initialice-advances";

const AdvancesFilms = (props) => {
  const [filmAdvance, setFilmAdvance] = useState("streaming");
  useInitialiceAdvances(filmAdvance);

  const { advanceFilms, isLoadingAdvances } = useSelector((state) => ({
    advanceFilms: state.advancesCollection.advanceFilms,
    isLoadingAdvances: state.advancesCollection.isLoadingAdvances,
  }));

  const handleClickAdvance = (category) => {
    setFilmAdvance(category);
  };
  const handlePlayVideo = (id) => {
    props.onClickModal(id);
  };

  return (
    <div className={props.className}>
      <section className="container-advances">
        <h2 className="section-popular">Latest Advances:</h2>
        <div className="section-advances">
          <ButtonsGroup
            className="menu-section"
            onClickAdvance={handleClickAdvance}
          />

          <div className="section-films">
            {isLoadingAdvances && <Spinner className="spinner-center" />}
            {!isLoadingAdvances &&
              advanceFilms.map((film) => (
                <div
                  className="film"
                  key={film.id}
                  onClick={() => {
                    handlePlayVideo(film.id);
                  }}
                >
                  <Film
                    src={`${BASE_URL_IMG}${SMALL_SIZE}${film.backdrop_path}`}
                    title={film.name ? film.name : film.title}
                    className="film"
                  />
                  <PlayIcon className="play-icon" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdvancesFilms;

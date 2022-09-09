//own
import ButtonsGroup from "../../../components/btn-group/";
import Film from "../../../components/films";
import { BASE_URL_IMG, SMALL_SIZE } from "../../../config";
import PlayIcon from "../../../icons/play";

const AdvancesFilms = (props) => {
  const handleClickAdvance = (category) => {
    props.onClickAdvance(category);
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
            {props.collection.map((film) => (
              <div className="film" key={film.id}>
                <Film
                  src={`${BASE_URL_IMG}${SMALL_SIZE}${film.backdrop_path}`}
                  title={film.name}
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

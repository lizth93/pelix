import ButtonsGroup from "../../../components/buttons-group";
import Film from "../../../components/films/";
import { BASE_URL_IMG, SIZE_IMAGE } from "../../../config";
import PlayIcon from "../../../icons/play";

const AdvancesFilms = (props) => {
  return (
    <div className={props.className}>
      <section className="container-advances">
        <h2 className="section-popular">Latest Advances:</h2>
        <div className="section-advances">
          <ButtonsGroup className="menu-section" />

          <div className="section-films">
            {props.collection.map((film) => (
              <div className="film">
                <Film
                  key={film.id}
                  src={`${BASE_URL_IMG}${SIZE_IMAGE}${film.backdrop_path}`}
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

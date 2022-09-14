import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//own
import Movie from "../../../components/movie";
import Tv from "../../../components/tv";
import { COLLECTIONS } from "../../../constants";
import { detailActions } from "../../../store/collections/details/detail-slice";

const TopRated = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryTopRated = props.topRated;

  const { showModal } = useSelector((state) => ({
    showModal: state.detailsCollection.showModal,
  }));

  const handleModal = (category, id) => {
    history.push(`${COLLECTIONS}/${category}/${id}`);
    validateModal();
  };

  function validateModal() {
    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
    }
  }

  return (
    <div className={props.className}>
      <section className="container-top-rated ">
        <h2 className="section-popular">Top Rated {categoryTopRated}</h2>

        <div className="section-top-rated ">
          {categoryTopRated === "movies" &&
            props.collection.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                className="film-top"
                detailMode="static"
                onClickModal={handleModal}
              />
            ))}

          {categoryTopRated === "tv" &&
            props.collection.map((tv) => (
              <Tv
                key={tv.id}
                collection={tv}
                className="film-top"
                detailMode="static"
                onClickModal={handleModal}
              />
            ))}
        </div>
      </section>
    </div>
  );
};
export default TopRated;

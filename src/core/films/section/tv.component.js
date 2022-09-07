import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import useInitialiceTv from "../../main/use-initialice-tv";
import { videosActions } from "../../../store/collections/movies/details/detail-slice";
import Spinner from "../../../components/spinner";
import Tv from "../tv";

const TvSection = (props) => {
  useInitialiceTv();
  const dispatch = useDispatch();
  const history = useHistory();
  const { tvPopular, isLoadingTv, showModal } = useSelector((state) => ({
    tvPopular: state.tvCollection.tvPopular,
    isLoadingTv: state.tvCollection.isLoadingTv,
    showModal: state.videosCollection.showModal,
  }));

  const handleModalTv = (category, id) => {
    history.push(`${category}/${id}`);

    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  };

  return (
    <main className={props.className}>
      <section className="container ">
        {!isLoadingTv && <h2 className="section-popular">Popular Tv</h2>}

        <div className="section-collections">
          {isLoadingTv && <Spinner />}

          {!isLoadingTv &&
            tvPopular.map((tv) => (
              <Tv
                key={tv.id}
                collection={tv}
                onClickModal={handleModalTv}
                withHover
              />
            ))}
        </div>
      </section>
    </main>
  );
};
export default TvSection;

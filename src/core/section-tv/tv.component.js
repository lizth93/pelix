import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import useInitialiceTv from "core/main/use-initialice-tv";
import { detailActions } from "store/details/detail-slice";
import Spinner from "components/spinner";
import Tv from "components/tv";
import PaginationTv from "./pagination-tv";
const TvSection = (props) => {
  useInitialiceTv();

  const dispatch = useDispatch();
  const history = useHistory();
  const { tvPopular, isLoadingTv, showModal, currentPage } = useSelector(
    (state) => ({
      tvPopular: state.tvCollection.tvPopular,
      isLoadingTv: state.tvCollection.isLoadingTv,
      showModal: state.detailsCollection.showModal,
      currentPage: state.tvCollection.currentPage,
    })
  );

  const handleModalTv = (category, id) => {
    history.push(`/${category}/page/${currentPage}/id/${id}`);

    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
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
      <PaginationTv />
    </main>
  );
};
export default TvSection;

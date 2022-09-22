import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//own
import { detailActions } from "store/details/detail-slice";
import ModalPlay from "components/modal/play/";
const PlayVideo = () => {
  const dispatch = useDispatch();
  const collectionId = useParams()?.collectionId;
  const showModal = useSelector((state) => state.detailsCollection.showModal);

  useEffect(() => {
    if (collectionId) {
      dispatch(detailActions.setModalShow(true));
    }
  }, [dispatch, collectionId]);
  return (
    <ModalPlay
      show={showModal}
      onHide={() => dispatch(detailActions.setModalShow(false))}
    />
  );
};

export default PlayVideo;

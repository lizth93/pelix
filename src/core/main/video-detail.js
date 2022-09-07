import Modal from "../../components/modal";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../../store/collections/details/detail-slice";

const VideoDetail = () => {
  const dispatch = useDispatch();
  const collectionId = useParams()?.collectionId;
  const showModal = useSelector((state) => state.detailsCollection.showModal);

  useEffect(() => {
    if (collectionId) {
      dispatch(detailActions.setModalShow(true));
    }
  }, [dispatch, collectionId]);
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => dispatch(detailActions.setModalShow(false))}
      />
    </>
  );
};

export default VideoDetail;

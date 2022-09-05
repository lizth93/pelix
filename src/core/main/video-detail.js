import Modal from "../../components/modal";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";

const VideoDetail = () => {
  const dispatch = useDispatch();
  const collectionId = useParams()?.collectionId;
  const showModal = useSelector((state) => state.videosCollection.showModal);

  useEffect(() => {
    if (collectionId) {
      dispatch(videosActions.setModalShow(true));
    }
  }, [dispatch, collectionId]);
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => dispatch(videosActions.setModalShow(false))}
      />
    </>
  );
};

export default VideoDetail;

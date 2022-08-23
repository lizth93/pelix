import Modal from "../../components/modal.styled";
import React from "react";

const VideoDetail = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default VideoDetail;

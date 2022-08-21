import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useSelector } from "react-redux";
import useInitialiceVideos from "../core/movies/use-initialice-videos";
import Spinner from "./spinner";
import { API_YOUTUBE_URL } from "../config";

function RenderModal(props) {
  useInitialiceVideos(props.movie.id);

  const { videos, isLoading } = useSelector((state) => ({
    videos: state.videosCollection.videos,
    isLoading: state.videosCollection.isLoading,
  }));

  return (
    <div className={props.className}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Modal.Body>
            {videos.map((video) =>
              video.name === "Official Trailer" ? (
                <iframe
                  width="720"
                  height="405"
                  src={`${API_YOUTUBE_URL}${video.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                ""
              )
            )}
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RenderModal;

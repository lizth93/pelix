import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

//own
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import useInitialiceVideos from "../../../core/main/use-initialice-videos";
import VideoPlayer from "../../video-player";

function ModalPlay(props) {
  useInitialiceVideos();
  const [principalVideo, setPrincipalVideo] = useState(null);

  const { videos, isLoading, error } = useSelector((state) => ({
    videos: state.detailsCollection.videos,
    isLoading: state.detailsCollection.isLoading,
    error: state.detailsCollection.error,
  }));

  useEffect(() => {
    if (!isLoading) {
      if (videos.length !== 0) {
        console.log("here");
        setPrincipalVideo(videos[0]);
      }
    }
  }, [videos, isLoading]);
  if (!principalVideo) return;

  return (
    <div className={props.className} onClick={props.onClick}>
      {error && <p>{error}</p>}
      {!error && (
        <>
          <Button variant="primary" onClick={props.onHide}>
            Custom Width Modal
          </Button>

          {!isLoading && (
            <BootstrapModal
              {...props}
              size="lg"
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <BootstrapModal.Header closeButton>
                <BootstrapModal.Title id="example-custom-modal-styling-title">
                  {principalVideo.name}
                </BootstrapModal.Title>
              </BootstrapModal.Header>
              <BootstrapModal.Body>
                <VideoPlayer
                  className="video-player"
                  video={principalVideo}
                  width="1280"
                  height="720"
                />
              </BootstrapModal.Body>
            </BootstrapModal>
          )}
        </>
      )}
    </div>
  );
}

export default ModalPlay;

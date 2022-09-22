import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//own
import BootstrapModal from "react-bootstrap/Modal";
import useInitialiceVideos from "core/main/use-initialice-videos";
import VideoPlayer from "components/video-player";
import { detailActions } from "store/details/detail-slice";

function ModalPlay(props) {
  const dispatch = useDispatch();

  useInitialiceVideos();

  const { videos, isLoading, error, currentVideo, currentFilm } = useSelector(
    (state) => ({
      videos: state.detailsCollection.videos,
      isLoading: state.detailsCollection.isLoading,
      error: state.detailsCollection.error,
      currentVideo: state.detailsCollection.currentVideo,
      currentFilm: state.detailsCollection.currentFilm,
    })
  );

  useEffect(() => {
    if (!isLoading) {
      if (videos.length !== 0) {
        dispatch(detailActions.setCurrentVideo(videos[0]));
      }
    }
  }, [videos, isLoading, dispatch]);
  console.log(currentFilm);

  return (
    <div className={props.className} onClick={props.onClick}>
      <>
        {!isLoading && (
          <BootstrapModal
            {...props}
            size="lg"
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <BootstrapModal.Header closeButton>
              <BootstrapModal.Title id="example-custom-modal-styling-title">
                {currentFilm.name}
              </BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
              {error && !currentVideo && (
                <>
                  <p>{error}</p>
                </>
              )}
              {!error && currentVideo && (
                <VideoPlayer
                  className="video-player"
                  video={currentVideo}
                  width="1280"
                  height="720"
                />
              )}
            </BootstrapModal.Body>
          </BootstrapModal>
        )}
      </>
    </div>
  );
}

export default ModalPlay;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//own

import useInitialiceVideos from "../../core/main/use-initialice-videos";
import { IMG_SIZE_YOUTUBE, URL_IMG_YOUTUBE } from "../../config";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import Spinner from "../spinner";
import VideoPlayer from "../video-player";
import RenderCard from "../card";

function Modal(props) {
  const [principalVideo, setPrincipalVideo] = useState(null);
  useInitialiceVideos();

  const { videos, isLoading, error, currentMovie } = useSelector((state) => ({
    videos: state.detailsCollection.videos,
    currentMovie: state.detailsCollection.currentMovie,
    isLoading: state.detailsCollection.isLoading,
    error: state.detailsCollection.error,
  }));

  useEffect(() => {
    if (!isLoading) {
      if (videos.length !== 0) {
        setPrincipalVideo(videos[0].name);
      }
    }
  }, [videos, isLoading]);

  const handlerShowVideo = (video) => {
    setPrincipalVideo(video);
  };

  return (
    <div className={props.className} onClick={props.onClick}>
      <BootstrapModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <BootstrapModal.Body>
            {error && <p>{error}</p>}
            {!error &&
              videos.map((video) =>
                video.name === principalVideo ? (
                  <div key={video.id}>
                    <BootstrapModal.Header closeButton>
                      <BootstrapModal.Title id="contained-modal-title-vcenter">
                        {video.name}
                      </BootstrapModal.Title>
                    </BootstrapModal.Header>

                    <VideoPlayer video={video} key={video.id} />
                  </div>
                ) : (
                  ""
                )
              )}
            <div className="overview">
              <p>{currentMovie.overview}</p>
              <span>Genres:</span>
              <ul>
                {currentMovie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            {!error && (
              <>
                <h4> Videos Related:</h4>

                <ul className="more-videos">
                  {videos.map((video) => (
                    <RenderCard
                      key={video.key}
                      name={video.name}
                      image={`${URL_IMG_YOUTUBE}${video.key}/${IMG_SIZE_YOUTUBE}`}
                      onClick={() => {
                        handlerShowVideo(video.name);
                      }}
                    />
                  ))}
                </ul>
              </>
            )}
          </BootstrapModal.Body>
        )}
        <BootstrapModal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </div>
  );
}

export default Modal;

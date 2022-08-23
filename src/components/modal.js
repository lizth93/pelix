import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import Spinner from "./spinner";
import VideoPlayer from "./video-player";
import RenderCard from "./card";

import React, { useState } from "react";
import { useSelector } from "react-redux";

//own
import useInitialiceVideos from "../core/movies/use-initialice-videos";
import { IMG_SIZE_YOUTUBE, URL_IMG_YOUTUBE } from "../config";

function Modal(props) {
  const [principalVideo, setPrincipalVideo] = useState("Official Trailer");
  useInitialiceVideos();

  const { videos, isLoading, error, currentMovie, isLoadingCurrentMovie } =
    useSelector((state) => ({
      videos: state.videosCollection.videos,
      isLoading: state.videosCollection.isLoading,
      error: state.videosCollection.error,
      currentMovie: state.moviesCollection.currentMovie,
      isLoadingCurrentMovie: state.moviesCollection.isLoadingCurrentMovie,
    }));

  if (isLoading || isLoadingCurrentMovie) {
    return <Spinner />;
  }

  const handlerShowVideo = (video) => {
    setPrincipalVideo(video);
  };

  console.log(props.show, "props.show");
  return (
    <div className={props.className} onClick={props.onClick}>
      <BootstrapModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BootstrapModal.Header closeButton>
          {!isLoadingCurrentMovie && (
            <BootstrapModal.Title id="contained-modal-title-vcenter">
              {currentMovie.title}
            </BootstrapModal.Title>
          )}
        </BootstrapModal.Header>
        {isLoading && <Spinner />}
        {!isLoading && (
          <BootstrapModal.Body>
            Hellooooo
            {error && <p>{error}</p>}
            {!error &&
              videos.map((video) =>
                video.name === principalVideo ? (
                  <VideoPlayer video={video} key={video.id} />
                ) : (
                  ""
                )
              )}
            <div>
              <p className="overview">{currentMovie.overview}</p>
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

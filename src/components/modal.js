import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useInitialiceVideos from "../core/movies/use-initialice-videos";
import Spinner from "./spinner";
import { IMG_SIZE_YOUTUBE, URL_IMG_YOUTUBE } from "../config";
import VideoPlayer from "./video-player";
import RenderCard from "./card";

function RenderModal(props) {
  useInitialiceVideos(props.movie.id);
  const [principalVideo, setPrincipalVideo] = useState("Official Trailer");

  const { videos, isLoading, error } = useSelector((state) => ({
    videos: state.videosCollection.videos,
    isLoading: state.videosCollection.isLoading,
    error: state.videosCollection.error,
  }));

  console.log(props.movie, "what movie hve");

  const handlerShowVideo = (video) => {
    setPrincipalVideo(video);
  };
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
            {error && <p>{error}</p>}
            {!error &&
              videos.map((video) =>
                video.name === principalVideo ? (
                  <VideoPlayer video={video} />
                ) : (
                  ""
                )
              )}

            <div>
              <p className="overview">{props.movie.overview}</p>
            </div>

            {!error && (
              <>
                <h4> Videos Related:</h4>

                <ul className="more-videos">
                  {videos.map((video) => (
                    <>
                      <RenderCard
                        name={video.name}
                        image={`${URL_IMG_YOUTUBE}${video.key}/${IMG_SIZE_YOUTUBE}`}
                        onClick={() => {
                          handlerShowVideo(video.name);
                        }}
                      />
                      {/* <li
                      className="type-video"
                      onClick={() => {
                        handlerShowVideo(video.name);
                      }}
                    >
                      <figure>
                        <img
                          src={`${URL_IMG_YOUTUBE}${video.key}/${IMG_SIZE_YOUTUBE}`}
                          alt={video.name}
                        />
                        <figcaption>{video.name}</figcaption>
                      </figure>
                    </li> */}
                    </>
                  ))}
                </ul>
              </>
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

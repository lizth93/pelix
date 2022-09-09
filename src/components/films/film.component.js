import AddIcon from "../../icons/add";
import PlayIcon from "../../icons/play";
import ShowMoreIcon from "../../icons/more";
import RadialProgressBar from "../radial-progress-bar";

const Film = (props) => {
  const className = getClassName(props);

  const handleModalCollection = (id) => {
    props.onClickModal(id);
  };

  return (
    <div className={className}>
      <figure className="collection__fig">
        <img src={props.src} alt={props.title} className="collection__img" />
      </figure>
      <div className="collection__title">
        <h1>
          <span className="text-description">{props.title}</span>
        </h1>
        <div className="icons">
          {props.withMoreIcon && (
            <>
              <div>
                <PlayIcon className="play-icon" />
                <AddIcon />
              </div>
              <div className="details-container">
                <ShowMoreIcon
                  onClick={() => handleModalCollection(props.collection.id)}
                />
                <RadialProgressBar
                  className="radial-bar"
                  value={props.collection.vote_average * 10}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function getClassName(props) {
  const classNames = [props.className];

  if (props.withHover) {
    classNames.push("with-hover");
  }

  const detailMode = props.detailMode || "static";
  if (detailMode === "static") {
    classNames.push("static-detail");
  }

  return classNames.join(" ");
}

export default Film;

//own
import ShowMoreIcon from "icons/more";
import RadialProgressBar from "components/radial-progress-bar";

const Film = (props) => {
  const className = getClassName(props);

  const handleModalCollection = (id) => {
    props.onClickModal(id);
  };

  const handleClick = () => {
    props.onClickFilm(props.collection.id);
  };
  return (
    <div className={className} onClick={handleClick}>
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
              <ShowMoreIcon
                onClick={() => handleModalCollection(props.collection.id)}
              />

              <div className="details-container">
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

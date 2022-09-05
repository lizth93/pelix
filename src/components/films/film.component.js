import AddIcon from "../../icons/add";
import PlayIcon from "../../icons/play";

const Films = (props) => {
  return (
    <div className={props.className}>
      <figure className="collection__fig">
        <img src={props.src} alt={props.title} className="collection__img" />
      </figure>
      <div className="collection__title">
        <h1>
          <span className="text-description">{props.title}</span>
        </h1>
        <div className="icons">
          <div>
            <PlayIcon />
            <AddIcon />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Films;

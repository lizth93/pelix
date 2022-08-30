const FilmsDetail = (props) => {
  console.log(props, "what have");
  return (
    <>
      <div className={props.className}>
        <figure className="collection__fig">
          <img src={props.src} alt={props.name} className="collection__img" />
        </figure>
        <div className="collection__title">
          <h1>
            <span className="text-description">{props.name} Hola</span>
          </h1>
        </div>
      </div>
    </>
  );
};
export default FilmsDetail;

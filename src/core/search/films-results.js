import Films from "../../components/films";
import ShowMoreIcon from "../../icons/more";

const Results = (props) => {
  return (
    <Films src={null} title={props.collection.name}>
      <ShowMoreIcon />
    </Films>
  );
};
export default Results;

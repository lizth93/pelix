import Film from "components/films/";
import useLoadCredits from "../use-load-credits";
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import { useSelector } from "react-redux";

const Credits = (props) => {
  useLoadCredits();

  const { credit } = useSelector((state) => ({
    credit: state.creditsCollection.credits,
  }));

  return (
    <section className={props.className}>
      <h2 className="section-credits">Credits:</h2>

      <div className="container-credits">
        {credit.map((person) => (
          <Film
            key={person.id}
            src={`${BASE_URL_IMG}${SMALL_SIZE}${person.profile_path}`}
            title={person.name}
          />
        ))}
      </div>
    </section>
  );
};
export default Credits;

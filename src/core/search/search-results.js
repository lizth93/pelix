import { useSelector } from "react-redux";
import Results from "./films-results";
import RenderSpinner from "../../components/spinner";
import useInitialiceSearchTerm from "./use-initialice-search";

const SearchResults = (props) => {
  useInitialiceSearchTerm();
  const { results, isLoading } = useSelector((state) => ({
    results: state.searchResults.results,
    isLoading: state.searchResults.isLoading,
  }));

  if (!isLoading) {
    console.log(results, "have results?");
  }

  return (
    <div className={props.className}>
      <section className="container ">
        <div className="section-results">
          {isLoading && <RenderSpinner />}
          {results.map((film) => (
            <Results key={film.id} collection={film} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default SearchResults;

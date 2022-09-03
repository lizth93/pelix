const ErrorSearch = (props) => {
  return (
    <div className="error">
      <p>
        <strong>{props.error}</strong>
      </p>
      <span className="error__suggestions">Suggestions:</span>
      <ul>
        <li>Try with keywords. </li>
        <li>Are you looking for a movie? or a series?.</li>
        <li>Try searching for the type of genre or the name of the film.</li>
      </ul>
    </div>
  );
};

export default ErrorSearch;

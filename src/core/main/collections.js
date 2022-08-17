import Movie from "../movies/movie.styled";

const Collections = (props) => {
  return (
    <main className={props.className}>
      <section className="container-fluid section-collections">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
    </main>
  );
};

export default Collections;

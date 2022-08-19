import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.scss";

import Collections from "../main/collections.styled";
import Layout from "../../layouts/layout";
import RenderCarousel from "../../components/carousel";

function App() {
  return (
    <Layout>
      <RenderCarousel />
      <Collections />
    </Layout>
  );
}

export default App;

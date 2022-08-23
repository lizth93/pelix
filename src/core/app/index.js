import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Collections from "../main/collections.styled";
import Layout from "../../layouts/layout";
import RenderCarousel from "../../components/carousel";

import { Route, Redirect } from "react-router-dom";
import { COLLECTIONS, COLLECTION_ID } from "../../config";
import VideoDetail from "../main/video-detail";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Redirect to={COLLECTIONS} />
      </Route>
      <Route path={COLLECTIONS}>
        <RenderCarousel />
        <Collections />
      </Route>
      <Route path={COLLECTION_ID} exact>
        <VideoDetail />
      </Route>
    </Layout>
  );
}

export default App;

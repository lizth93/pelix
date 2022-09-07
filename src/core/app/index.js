import Collections from "../main/collections";
import Layout from "../../layouts/layout";
import RenderCarousel from "../../components/carousel";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  COLLECTIONS,
  COLLECTION_ID,
  SECTION_MOVIES,
  SEARCH_RESULTS,
  SECTION_MOVIES_ID,
  SECTION_TV_ID,
  SECTION_TV,
} from "../../config";
import VideoDetail from "../main/video-detail";
import SearchResults from "../search/results";

import SectionMovies from "../section-movies";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TvSection from "../section-tv";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Redirect to={COLLECTIONS} />
      </Route>
      <Switch>
        <Route path={SECTION_MOVIES}>
          <SectionMovies />
        </Route>
        <Route path={SECTION_TV}>
          <TvSection />
        </Route>
        <Route path={COLLECTIONS}>
          <RenderCarousel />
          <Collections />
        </Route>
      </Switch>
      <Route path={COLLECTION_ID} exact>
        <VideoDetail />
      </Route>
      <Route path={SECTION_MOVIES_ID} exact>
        <VideoDetail />
      </Route>
      <Route path={SECTION_TV_ID} exact>
        <VideoDetail />
      </Route>

      <Route path={SEARCH_RESULTS}>
        <SearchResults />
      </Route>
    </Layout>
  );
}

export default App;

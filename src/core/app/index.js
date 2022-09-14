import { Route, Redirect, Switch } from "react-router-dom";
//own
import Collections from "core/main/collections";
import Layout from "layouts";
import Carousel from "components/carousel";
import {
  COLLECTIONS,
  COLLECTION_ID,
  SECTION_MOVIES,
  SEARCH_RESULTS,
  SECTION_COLLECTION_ID,
  SECTION_TV,
  MODAL_LATEST_ADVANCES,
} from "constants";
import VideoDetail from "core/main/video-detail";
import SearchResults from "core/search/results";
import SectionMovies from "core/section-movies";
import TvSection from "core/section-tv";
import "core/app/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayVideo from "core/main/advances/play-video";

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
          <Carousel />
          {/* TODO: Rename the Collections component with "HomePage" */}
          <Collections />
        </Route>
      </Switch>
      <Route path={COLLECTION_ID} exact>
        <VideoDetail />
      </Route>
      <Route path={SECTION_COLLECTION_ID} exact>
        <VideoDetail />
      </Route>

      <Route path={MODAL_LATEST_ADVANCES} exact>
        <PlayVideo />
      </Route>

      <Route path={SEARCH_RESULTS}>
        <SearchResults />
      </Route>
    </Layout>
  );
}

export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../pages/index";
import Page2 from "../pages/index2";

function App() {
  return (
    <All>
      <StoreProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {content == "index" ? (
              <Route path="/:User">
                <Home />
              </Route>
            ) : content == "artigo" ? (
              <Route path="/:User">
                <Page2 />
              </Route>
            ) : (
              <>
                <Route path="/artigospage">
                  <ArtigosPage />
                </Route>
                <Route path="/podcastpage">
                  <PodcastPage />
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </StoreProvider>
    </All>
  );
}

export default App;

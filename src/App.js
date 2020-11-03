import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import PageTwo from "./pages/PageTwo";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/">
            <HomePageOne />
          </Route>
          <Route path="/section2">
            <HomePageTwo />
          </Route>
          <Route path="/page2">
            <PageTwo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

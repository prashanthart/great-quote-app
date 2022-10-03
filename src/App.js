import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/Layout/MainHeader";
import React, { Suspense } from "react";
// import Insta from "./components/SVG/Insta";
// import AddQuote from "./pages/AddQuote";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <MainHeader />
      <Suspense fallback={<div className="center">Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      
    </div>
  );
}

export default App;

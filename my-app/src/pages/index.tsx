import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Test = React.lazy(() => import("./Test"));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={Test} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

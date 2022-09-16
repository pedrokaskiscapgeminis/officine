import { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./style/styles.css";

import { useGlobal } from "./globals/useGlobal";
import Scene from "./components/3D/Scene";
import Nav from "./components/UX/Nav";
import Page from "./components/UX/Page";
//import AddLeva from "./globals/AddLeva";

export default function App() {
  const key = useGlobal((state) => state.pageCurKey);
  const init = useGlobal((state) => state.init);
  useEffect(() => init(), [init]);
  var location = useLocation();
  console.log(key, init);
  return (
    <div className="App">
      <Scene />
      <div className="HUD">
        <Nav />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.key}>
            <Route component={Page} path={`/:key/`} exact />
            <Route exact path="/">
              <Redirect to={`/${key}`} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      {/* <AddLeva /> */}
    </div>
  );
}

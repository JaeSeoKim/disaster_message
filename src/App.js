import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Location from "./components/Loaction";
import Detail from "./components/Detail";
import About from "./components/About";
import Error_page from "./components/Error_page";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/location" exact={true} component={Location} />
          <Route path="/detail/:id" exact={true} component={Detail} />
          <Route path="/about" exact={true} component={About} />
          <Route component={Error_page} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

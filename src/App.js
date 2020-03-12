import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Location from "./routes/Loaction";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Error_page from "./routes/Error_page";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch >
        <Route path="/" exact={true} component={Home}  />
        <Route path="/location" exact={true} component={Location} />
        <Route path="/detail/:id" exact={true} component={Detail} />
        <Route path="/about" exact={true} component={About} />
        <Route component={Error_page} />
      </Switch>
    </HashRouter>
  );
}

export default App;

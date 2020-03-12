import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Location from "./routes/Loaction";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Error_page from "./routes/Error_page";
import Navigation from "./components/Navigation";
import { Layout, Row, Col } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

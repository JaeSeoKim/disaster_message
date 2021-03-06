import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Error_page from "./routes/Error_page";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <Navigation />
        <Switch >
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/detail/:id" exact={true} component={Detail} />
          <Route component={Error_page} />
        </Switch>
      </HashRouter>
    </Provider >
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import Home from "./pages/Home/components/Home";
import Months from "./pages/Months/components/Months";
import Header from "./pages/shared/Header/Header";
import Popup from "./pages/shared/Popup/Popup";
import "./styles/index.scss";

function App() {
  return (
    <div className="global-container">
      <Popup />

      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/months" exact component={Months} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

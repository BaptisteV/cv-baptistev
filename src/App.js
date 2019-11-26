import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";

class App extends React.Component {
  render() {
    return (
      <div id="app-container" className="container">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

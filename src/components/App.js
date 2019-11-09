import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "../PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import CardHomePage from "./home/CardHomePage";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={CardHomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;

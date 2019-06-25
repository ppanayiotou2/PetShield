import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/project/CreateProject";
import Search from "./components/pets/Search";
import Pet from "./components/pets/Pet";
import Home from "./home";
import NewPet from "./components/dashboard/NewPet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/create" component={CreateProject}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/pet/:id" component={Pet}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="/dashboard/pet/create" component={NewPet}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Project/Project";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Switch>
          
          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route  path="/home">
           <Home></Home>
          </Route>

          <Route  path="/contact">
          <Contact></Contact>
          </Route>

          <Route  path="/about">
          <About></About>
          </Route>

          
          <Route  path="/project/:id">
         <Services></Services>
          </Route>
          
          <Route  path="/*">
         <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

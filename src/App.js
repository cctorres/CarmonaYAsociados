import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import Profiles from "./Components/Pages/Profiles/Profiles"
import Footer from "./Components/Footer/Footer"
import About from "./Components/Pages/About/About";
import Services from "./Components/Pages/Services/Services";

function App() {
  return (
    
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/nosotros" component={About} />
          <Route path="/servicios" component={Services} />
          <Route path="/perfiles" component={Profiles} />          
          <Route path="/contacto" component={Contact} />
        </Switch>        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

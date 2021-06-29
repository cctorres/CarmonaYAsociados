import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Header/Header";
import Perfiles from "./Components/Pages/Perfiles"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/perfiles" component={Perfiles} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import Perfiles from "./Components/Pages/Profiles/Perfiles"
import News from "./Components/Pages/News/News"
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
          <Route path="/news" component={News} />
        </Switch>        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

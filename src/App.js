import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Hero />
        </Route>
        <Route exact path="/channels">
          <Home />
        </Route>
        <Route exact path="/channels/:id">
          <Home />
        </Route>
        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

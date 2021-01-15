import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FourOhFour from "./components/fourohfour";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FourOhFour} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

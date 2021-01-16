import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FourOhFour from "./components/fourohfour";
import { Switch, Route, Redirect } from "react-router-dom";
import ProfileSection from './components/profilesection';
import Projects from "./components/projects";

const App = () => (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProfileSection} />
        <Route exact path ="/test" component = {Projects}/>
        <Route exact path ="/404" component={FourOhFour}/>
        <Redirect to="/404"/>
      </Switch>
      <Footer />
    </div>
  );

export default App;

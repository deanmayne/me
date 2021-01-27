import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FourOhFour from "./components/fourohfour";
import { Switch, Route, Redirect } from "react-router-dom";
import ProfileSection from './components/profilesection';
import Projects from "./components/projects";
import Resume from "./components/resume";

const App = () => (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProfileSection} />
        <Route exact path ="/projects" component = {Projects}/>
        <Route exact path ="/resume" component = {Resume}/>
        <Route exact path ="/404" component={FourOhFour}/>
        <Redirect to="/404"/>
      </Switch>
      <Footer />
    </div>
  );

export default App;

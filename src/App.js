import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FourOhFour from "./components/fourohfour";
import { Switch, Route, Redirect } from "react-router-dom";
import ProfileSection from "./components/profilesection";
import Projects from "./components/projects";
import Resume from "./components/resume";
import amplitude from "amplitude-js";

// "env:app:page:element?:event
export const logAmplitudeEvent = (event, eventData) => {
  amplitude.getInstance().init("3f7670de596865b3f6d4cb7b6f6d3428");
  amplitude
    .getInstance()
    .logEvent(`${process.env.NODE_ENV}:personalsite:${event}`, eventData);
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProfileSection} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/404" component={FourOhFour} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

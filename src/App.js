import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FourOhFour from "./components/fourohfour";

const App = () => {
  return (
    <div>
      <Navbar />
      <FourOhFour/>
      <Footer />
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../src/Components/Footer/Footer";
import "./App.css";
import Accommodation from "./View/Accommodation/Accommodation";
import Home from "./View/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/accommodation" component={Accommodation} />
        {/* <Route path="/vehicle" component={}></Route> */}
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

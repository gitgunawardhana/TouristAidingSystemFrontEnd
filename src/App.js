import { BrowserRouter as Router, Route } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../src/Components/Footer/Footer";
import "./App.css";
import AccountSetting from "./View/AccountSettings/AccountSettings";
import Home from "./View/Home/Home";
import Location from "./View/Location/Location";
import Security from "./View/Security/Security";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/location" component={Location} />
        <Route path="/accountSettings" component={AccountSetting} />
        <Route path="/Security" component={Security} />
        {/* <Route path="/vehicle" component={}></Route> */}
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

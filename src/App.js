import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import "./App.css";
import Accommodation from "./View/Accommodation/Accommodation";
import Home from "./View/Home/Home";
import AccountSettings from "./View/AccountSettings/AccountSettings"
import Security from "./View/Security/Security"

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/accommodation" component={Accommodation} />
        <Route path="/accountSettings" component={AccountSettings} />
        <Route path="/security" component={Security} />
        {/* <Route path="/vehicle" component={}></Route> */}
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
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
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

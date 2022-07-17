import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Accommodation from "./View/Accommodation/Accommodation";
import Home from "./View/Home/Home";
import Location from "./View/Location/Location";
import Locations from "./View/Locations/Locations";
import PageNotFound from "./View/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

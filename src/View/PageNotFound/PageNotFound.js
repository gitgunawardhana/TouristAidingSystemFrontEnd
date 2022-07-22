import Navbar from "../../Component/Navbar/Navbar";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <Navbar></Navbar>
      <div className="page-not-found">
        <h1 className="text-center">404: PageNotFound</h1>
      </div>
    </>
  );
}

export default PageNotFound;

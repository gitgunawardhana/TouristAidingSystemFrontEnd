import Sri_Lanka_Map from "../../Assets/Sri_Lanka_Map.png";
import Sri_Lanka_Map1 from "../../Assets/Sri_Lanka_Map1.png";
import "./HomePageHeader.css";
import useMediaQuery from "./useMediaQuery";

function Header() {
  const matches = useMediaQuery("(min-width: 1050px)");
  return (
    <>
      <div className="header">
        <div className="image-map-div">
          <img
            className="image-map"
            src={matches ? Sri_Lanka_Map : Sri_Lanka_Map1}
            alt="Sri_Lanka_Map"
          />
        </div>
        <div className="text">
          <div className="para">
            <h1>ROADSIGN</h1>
            <h2>WHO ARE WE?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

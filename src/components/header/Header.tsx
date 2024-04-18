import "./Header.styles.css";
import config from "../../config/config.json";
import smallBanner from "../../assets/images/Hero.png";
import ambulance from "../../assets/images/ambulance.png";
import fireEngine from "../../assets/images/fireEngine.png";

const Header = () => {
  const handleOnClick = () => {
    window.location.href = "https://www.jcfr1.org/";
  };
  return (
    <div>
      <div className="App-logo">
        <div className="left-section">
          <img
            src={ambulance}
            alt="main banner for the website"
            onClick={handleOnClick}
          />
        </div>
        <div className="center-section">
          <img
            className="center-image"
            src={smallBanner}
            alt="main banner for the website"
            onClick={handleOnClick}
          />
        </div>
        <div className="right-section">
          <img
            src={fireEngine}
            alt="main banner for the website"
            onClick={handleOnClick}
          />
        </div>
      </div>
      <div className="App-header">
        <h1>{config.header.title}</h1>
      </div>
    </div>
  );
};

export default Header;

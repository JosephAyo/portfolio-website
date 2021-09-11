import React from "react";
import "./style.scss";
import splash1 from "../../images/splash1.png";
const Main = () => {
  return (
    <div className="main ">
      <div className="row home-section">
        <div className="col-md-7 hello">
          <p>
            Bonjour, <br />
            Je suis Ayo.
          </p>
        </div>
        <div className="col-md-5 splash-container">
          <img alt="s" src={splash1} />
        </div>
      </div>
      <div className="row justify-content-center about-section">
        {/* <div className="col-md-6 splash-container">
          <img alt="s" src={splash1} />
        </div> */}
        <div className="col-md-4 story">
          <p>
            Bonjour, <br />
            Je suis Ayo. Hasd asdaioerea aoisfh adaoidsh sadoahsdao daoasdhad
          </p>
        </div>
        <div className="col-md-4 story">
          <p>
            Bonjour, <br />
            Je suis Ayo. Hasd asdaioerea aoisfh adaoidsh sadoahsdao daoasdhad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

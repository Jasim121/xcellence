import React from "react";
import "../css/mainstyle.css";
import "../css/responsive.css";
const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="innerbannerarea">
            
            <div className="row">
              <div className="col-lg-5 col-12 maincon ">
                <h2>The Black Xcellence</h2>
                <h5>This NFT is being launched for the purpose of<br></br> fundraising. Pitchblack x is in her early stages and<br></br> we are raising to help fund the building, and<br></br> release of the platform, as well as the marketing,<br></br> and mobilization of our community to activate the<br></br> platform at its fullest potential. </h5>
                <button className="bannerbutton"><img src="../images/button.png" alt="button" /></button>
                <img src="../images/pl.png" alt="button" className="playbt ms-3" />
               
              </div>
              <div className="col-lg-5 col-12 imgarea ms-end">
                  <img src="../images/Component.png" alt="mainimage" className=" float-end img-fluid" />
              </div>
              <div className="col-lg-2 col-12 subcontent float-end">
                  <h6>Goal</h6>
                  <h2>$1.1 M</h2>
                  <img src="../images/line.png" alt="" />
                  <h6 className="mt-5">30 days </h6>
                  <h5>Left to invest</h5>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

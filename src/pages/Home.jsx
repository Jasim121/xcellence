import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import TablesT from "./TabelsT";
import Tables from "./Tables";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* Highlights */}
      <div className="highlights">
        <div className="container-fluid">
          <div className="innerhighlights">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 leftArea">
                  <h4>Highlights</h4>
                  <h6>
                    Owners of this token receive early access to our platform
                  </h6>
                  <h6>Owners can redeem free swag with unique promo code</h6>
                  <h6>First owners receive 2.5% on secondary sale</h6>
                  <h6>Profit sharing up to 10%</h6>
                </div>
                <div className="col-lg-6 rightArea">
                  <h6> No Expiration</h6>
                  <h6>1 time use</h6>
                  <h6>Infinite</h6>
                  <h6>5 year</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Highlights */}

      {/* Overview */}
      <div className="overview">
        <div className="container-fluid">
          <div className="inneroverview">
            <div className="row">
              <div className="col-lg-6">
                <h4>
                  Company <br></br>Overview
                </h4>
              </div>
              <div className="col-lg-6">
                <p>
                  Pitchblack <span>x</span> is a Decentralized Financial(DeFi)
                  platform utilizing NFT smart contracts to allow streamlined
                  crowdfunding for founders, and secure, inclusive investing for
                  investors at all levels.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End overview */}

      {/* prosoluarea */}
      <div className="prosoluarea">
        <div className="container-fluid">
          <div className="innerprosoluarea">
            <div className="row">
              <div className="col-lg-3 col-12">
                <h4>
                  The<br></br> Problem
                </h4>
              </div>
              <div className="col-lg-9 col-12">
                <p>
                  For the last several years, black founders have only received
                  1% of total capital deployment. While this is an obvious
                  problem, we wanted to understand why this was happening. After
                  over 6 months, 100+ interviews, and 2 rounds of customer
                  discovery, we identified that black founders were commonly
                  skipping the family, friends round. We discovered that
                  founders that had not skipped this step had almost always
                  followed with a successful seed round. <br></br>
                  For founders that were skipping this round we found that it
                  was due to lack of access to accredited investors, or family
                  members that could write a check of significant size. We also
                  found that black investors that are interested in
                  participating, found it difficult without facilitation from an
                  intermediary entity or person. This brought us to a new
                  problem,{" "}
                  <span>
                    Underrepresented communities are unable to invest at the
                    same capacity and level of access as the traditional
                    investor class.
                  </span>
                </p>
              </div>

              <div className="col-lg-3 cl-12 bottom">
                <h4>
                  The<br></br>Solution
                </h4>
              </div>
              <div className="col-lg-9 cpl-12 bottom">
                <p>
                  At the core of PitchBlack x we are a fundraising platform that
                  allows us to steamline the investment process, which lowers
                  the barrier for venture investments. We are introducing a new
                  way to invest using NFTs smart contracts utility to lead in
                  the wave of decentralized venture financing. We believe this
                  technology is pivotal in the success of the evolution of the
                  web to Web 3.0. Underrepresented communities have historically
                  been shut out of venture. It is these communities that have
                  the most to gain from a new internet where equity and
                  inclusion are the primary results of this new technology. It
                  is our mission to activate this new investor class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end prosoluarea */}

      {/* product */}
      <div className="overview">
        <div className="container-fluid">
          <div className="inneroverview">
            <div className="row">
              <div className="col-lg-6">
                <h4>Product</h4>
              </div>
              <div className="col-lg-6">
                <p>
                  Pitchblack <span>x</span> both a web and mobile app. Founders
                  are able to create a structured company profile, and due
                  diligence package for investors via the web app. They can mint
                  NFT’s to use for fundraising accross a community of
                  entry-level to experienced investors. Investors can purchase
                  the token offerings via the mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end product */}

      {/* Features */}
      <div className="features">
        <div className="container-fluid">
          <div className="innerfeatures">
            <div className="row">
              <div className="col-lg-4 col-12">
                <img
                  src="../images/mobile.png"
                  alt="mainimage"
                  className="img-fluid float-start"
                />
              </div>
              <div className="col-lg-8 col-12">
                <h4>Features</h4>
                <h6> • Mint number of NFTS based on their fundraising goal.</h6>
                <h6>
                  • NFT collections have tier leveled benefits based on target
                  investors.
                </h6>
                <h6>• Release NFTs for sale on the platform</h6>
                <h6>
                  • NFT’s have smart contracts that provide buyers with benefits
                </h6>
                <h6>• Buyers discover new business they believe in</h6>
                <h6>• Can buy or sell their NFT’s back to the exchange</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="innerrevenu">
            <div className="row">
              <div className="col-lg-4 col-12">
                <h4>
                  Revenue<br></br> Drivers
                </h4>
              </div>
              <div className="col-lg-8 col-12">
                <p>We have 3 main revenue drivers: </p>
                <p>2.5% fee on purchase, and sale transaction</p>
                <p>
                  0.5% interest made on deposits(Paid out by our Baas provider
                  SOLID)
                </p>
                <p>
                  1.87% on monthly total transactions(Paid by our Baas provider
                  SOLID)
                </p>
                <p>
                  We are exploring future revenue drivers in subscription, and
                  affiliate business partnerships, for phase 2 of our platform
                  development..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features */}

      {/* market */}
      <div className="market">
        <div className="container-fluid">
          <div className="marketoverview">
            <div className="row">
              <div className="col-lg-4">
                <h4>
                  The <br></br>Market
                </h4>
              </div>
              <div className="col-lg-8">
                <p>
                  There were 10 million new brokerage accounts opened, $621
                  Billion<br></br> deployed to start-up companies, $40 billion
                  invested into NFT’s, <br></br>and 360,000 NFT owners by the
                  end of 2021. These numbers<br></br> indicate a large appetite
                  for investing, and NFT interest. We’ve <br></br>assessed this
                  opportunity based on above numbers. Our service<br></br>{" "}
                  obtainable market is calculated using our revenue drivers, the{" "}
                  <br></br>total SAM, and using the 2021 NFT owners as potential
                  customers.
                  <p className="pt-5">TAM: $681 Billion</p>
                  <p className="pt-4">SAM: $40 Billion</p>
                  <p className="pt-4">SOM: $1.8 BIllion</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end market */}

      {/* compitition */}
      <div className="compitition">
      <div className="container-fluid">
          <div className="innercompitition">
            <div className="row">
              <div className="col-lg-4 col-12">
                <h4>
                The<br></br>Competition
                </h4>
              </div>
              <div className="col-lg-8 col-12">
               <p><span>Party Round</span> - a private party round investment platform automating<br></br> raise from open to close.</p>
               <p><span>OpenSeas</span> - NFT marketplace where users can mint, sell, and buy NFT’s</p>
               <p><span>Rarible</span> - NFT marketplace where users can mint, sell and buy NFT’s</p>
               <p><span>Robinhood</span> - democrotized stock investing by eliminating minimum <br></br>account balances, and  simplifying user interface for entry-level level <br></br>stock investing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end compitition */}

      {/* Comparables */}
      <div className="comparables">
        <div className="contaier-fluid">
          <div className="innerComparables">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h4>Comparables</h4>
                {/* tablearea */}
                <Tables/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Comparables */}

      {/* financing & milestones */}
      <div className="financing">
        <div className="container-fluid">
          <div className="innerfinancing">
             <div className="row">
               <div className="col-lg-12 col-12">
                 <h4>Financing & Milestones</h4>
                 <TablesT/>
               </div>
             </div>
          </div>
        </div>
      </div>
      {/* end financing & milestones */}

      {/* team area */}
      <Team/>
      {/* end team area */}
    </>
  );
};

export default Home;

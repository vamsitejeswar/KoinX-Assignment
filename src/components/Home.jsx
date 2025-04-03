import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Coinschart from './Coinschart';
import Bitcoinchart from './Bitcoinchart';
import Aboutcoins from './Aboutcoins';
import Sentiments from './Sentiments';
import Tokenomics from './Tokenomics';
import Team from './Team';
import Trendingcoins from './Trendingcoins'
import Performance from './Performance'
import tabimg from './images/tabimg.png';

const Home = () => {
  const performanceRef = useRef(null);
  const sentimentsRef = useRef(null);
  const teamRef = useRef(null);
  const tokenomicsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className='hometop bg-body-tertiary'>
        <div id="cb">Crytpocurrencies <i className="fa-solid fa-greater-than"></i><i className="fa-solid fa-greater-than"></i> Bitcoin</div>
        <div id="twocol" style={{ width: "93%", margin: "auto", paddingTop: "10px", display: "flex", flexDirection: "row" }}>
          <div id="leftcol" style={{ width: "70%" }}>
            <Bitcoinchart />
            
            <div style={{ width: "100%", overflowX: "auto" }}>
              <ul className="nav nav-underline" id="contents" style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid  #D3D3D3", flexWrap: "nowrap", gap: "60px", marginTop: "20px", marginBottom: "6px" }}>
                <li className="nav-item">
                  <Link className="nav-link active" to="#">Overview</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="#" onClick={() => scrollToSection(performanceRef)} style={{color:"black"}}>Fundamentals</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{color:"black"}}>New Insights</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(sentimentsRef)} style={{color:"black"}}>Sentiments</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(teamRef)} style={{color:"black"}}>Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{color:"black"}}>Technicals</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(tokenomicsRef)} style={{color:"black"}}>Tokenomics</Link>
                </li>
              </ul>
            </div>
            <div ref={performanceRef}>
              <Performance/>
            </div>
            <div ref={sentimentsRef}>
              <Sentiments />
            </div>
            <Aboutcoins />
            
            <div ref={tokenomicsRef}>
              <Tokenomics />
            </div>
            
            <div ref={teamRef}>
              <Team />
            </div>
          </div>
          <div id="rightcol">
            <div id="rightcol1">
            <h4 className='p-4'>Get Started with KoinX <br />for Free</h4>
            <small>With our range of features that you can equip for <br />free, KoinX allows you to be more educated and <br />aware of your tax reports.</small><br />
            <img className='p-3' src={tabimg} height='150px' width='150px' alt="Tab Image" /><br />
            <button className='btn btn-dark '>Get Started <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <Trendingcoins/>
          </div>
        </div>
        
          <Coinschart />

      </div>
    </>
  );
};

export default Home;

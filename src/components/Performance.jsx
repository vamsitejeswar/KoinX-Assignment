import React from 'react';
function App() {
  const low = 84930.22;
  const high = 88343.83;
  const current = 86034.00;

  const indicatorPosition = ((current - low) / (high - low)) * 100;

  return (
    <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">
        <h4 className='pb-2'><b>Performance</b></h4>

        {/* todays */}
        <div className="container-fluid mt-4 mb-5">
          <div className="labelp">Today's Low <br/>${low.toFixed(2)}</div>
          <div className="barp"><div className="indicatorp" style={{ left: `${indicatorPosition}%` }}>&nbsp;$86034.00</div></div>
          <div className="labelp">Today's High <br/>${high.toFixed(2)}</div>
        </div>
        {/* 52 weeks lh */}
        <div className="container-fluid">
          <div className="labelp">52W Low <br/>${low.toFixed(2)}</div>
          <div className="barp"><div style={{ left: `${indicatorPosition}%` }}></div></div>
          <div className="labelp">52W High <br/>${high.toFixed(2)}</div>
        </div>

        {/* fundamentals */}
        <h6 className='pb-3 mt-5'><b>Fundamentals</b></h6>
        <div className='row justify-content-center' id="fundamentals">
          <div className='col-12 col-md-5 me-5'>
            <div id="pfcb">
              <label id="cc">Bitcoin Price</label>
              <label>$88,343.83</label>
            </div>
            <div id="pfcb">
              <label id="cc">24h Low / 24h High</label>
              <label>$85,234.07 / $87,874.12</label>
            </div>
            <div id="pfcb">
              <label id="cc">7d Low / 7d High</label>
              <label>$83,382.07 / $87,874.12</label>
            </div>
            <div id="pfcb">
              <label id="cc">Trading Volume</label>
              <label>$23,249,202,782</label>
            </div>
            <div id="pfcb">
              <label id="cc">Market Cap Rank</label>
              <label>#1</label>
            </div>
          </div>
          <div className='col-12 col-md-5 ms-5'>
            <div id="pfcb">
              <label id="cc">Market Cap</label>
              <label>$323,507,290,047</label>
            </div>
            <div id="pfcb">
              <label id="cc">Market Cap Dominance</label>
              <label>38.343%</label>
            </div>
            <div id="pfcb">
              <label id="cc">Volume / Market Cap</label>
              <label>0.0718</label>
            </div>
            <div id="pfcb">
              <label id="cc">All-Time High</label>
              <small>$89,343.77 <small className='text-danger'>-75.6%</small><br/><small>Nov 10,2021(about 3 years)</small></small>
            </div>
            <div id="pfcb">
              <label id="cc">All-Time Low</label>
              <small>$67.81 <small className='text-success'>24729.1%</small><br/><small>Jul 06,2013(about 12 years)</small></small>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
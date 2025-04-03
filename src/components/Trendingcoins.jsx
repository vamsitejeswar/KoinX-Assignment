import React, { useEffect, useState } from 'react';

const Trendingcoins = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => setData(data.coins))
  }, []);

  return (
    <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">

        {/* trending coins */}
        <h4 className='pb-2'><b>Trending Coins</b></h4>
        {/* <div id="trendingc" > */}
        {data.slice().sort((a, b) => b.item.data.price_change_percentage_24h.usd - a.item.data.price_change_percentage_24h.usd).slice(0, 3).map((coin) => (
            <div id="boxwidth" key={coin.item.id} style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
            <img 
                src={coin.item.small} 
                alt={coin.item.name} 
                style={{ width: '30px', height: '25px' }} 
            />
            <small  ><b>{coin.item.symbol.toUpperCase()}</b></small>
            <small style={{ backgroundColor: coin.item.data.price_change_percentage_24h.usd >= 0 ? 'lightgreen' : '#FFCCCB ' }}>
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </small>
            </div>
        ))}
        {/* </div> */}
    </div>
  );
};

export default Trendingcoins;  
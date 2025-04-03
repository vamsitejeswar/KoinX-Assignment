import React, { useEffect, useState, useRef } from 'react';

const CoinsChart = () => {
  const [data, setData] = useState([]);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => setData(data.coins));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += 220;
        if (
          scrollRef1.current.scrollLeft + scrollRef1.current.clientWidth >=
          scrollRef1.current.scrollWidth
        ) {
          scrollRef1.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollLeft += direction * 220;
    }
  };

  return (
    <div className="coins-container">
      <div className="scroll-container">
        {/* you may also like */}
        <h4 className='pb-2'><b>You May Also Like</b></h4>
        <div className="scroll-buttons">
          <button onClick={() => scroll(scrollRef1, -1)}><i className="fa-solid fa-less-than"></i></button>
          <button onClick={() => scroll(scrollRef1, 1)}><i className="fa-solid fa-greater-than"></i></button>
        </div>
        <div ref={scrollRef1} className="scroll-content">
          {data.map((coin) => (
            <div key={coin.item.id} className="coin-item">
              <img src={coin.item.small} alt={coin.item.name} className="coin-image" />
              <small className='p-4'><b>{coin.item.symbol.toUpperCase()}</b></small>
              <small className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'price-up' : 'price-down'}>
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </small>
              <p>${coin.item.data.price.toFixed(4)}</p>
              <img src={coin.item.data.sparkline} alt={coin.item.name} className="coin-chart" />
            </div>
          ))}
        </div>
      </div>
      {/* Trending coins */}
      <div className="scroll-container">
        <h4 className='pb-2 mt-4'><b>Trending Coins</b></h4>
        <div className="scroll-buttons">
          <button onClick={() => scroll(scrollRef2, -1)}><i className="fa-solid fa-less-than"></i></button>
          <button onClick={() => scroll(scrollRef2, 1)}><i className="fa-solid fa-greater-than"></i></button>
        </div>
        <div ref={scrollRef2} className="scroll-content">
          {data
            .slice()
            .sort((a, b) => b.item.data.price_change_percentage_24h.usd - a.item.data.price_change_percentage_24h.usd)
            .map((coin) => (
              <div key={coin.item.id} className="coin-item">
                <img src={coin.item.small} alt={coin.item.name} className="coin-image" />
                <small className='p-4'><b>{coin.item.symbol.toUpperCase()}</b></small>
                <small className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'price-up' : 'price-down'}>
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </small>
                <p>${coin.item.data.price.toFixed(4)}</p>
                <img src={coin.item.data.sparkline} alt={coin.item.name} className="coin-chart" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoinsChart;

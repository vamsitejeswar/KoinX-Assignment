import { useEffect, useRef } from "react";
import bitcoinimg from './images/bitcoinimg.png';

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: "tradingview_chart",
          width: "100%",
          height: "370px",
          symbol: "BINANCE:BTCUSDT",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "white",
          style: "3",
          locale: "en",
          toolbar_bg: "#131722",
          enable_publishing: false,
          allow_symbol_change: false,
          hide_side_toolbar: true,
          hide_top_toolbar: true,
          withdateranges: false,
          hide_volume: true,
          details: false,
          hotlist: false,
          calendar: false,
          backgroundColor: "#FFFFFF",
          gridColor: "rgba(255, 255, 255, 0)",
          lineColor: "#2962ff",
          scalePosition: "right",
          scaleMode: "Normal",
          fontColor: "#d1d4dc",
          underLineColor: "rgba(41, 98, 255, 0.3)",
          trendLineColor: "#2962ff",
          crossHairProperties: {
            color: "#758696",
            width: 1,
            style: 2,
          },
          legend: false,
          loading_screen: { backgroundColor: "#FFFFFF", foregroundColor: "#2962ff" },
        });
      }
    };

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div className="bg-white p-4 rounded-lg" id="aboutcoins">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img src={bitcoinimg} width="35px" height="35px" alt="Bitcoin" />
          <h4 className="p-1">Bitcoin <small> (BTC)</small></h4>
          <button className="btn btn-secondary ms-5">Rank #1</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "center" }}>
          <h3 className="mt-3">$86,034.00</h3>
          <small className="mt-3 p-1" style={{ background: "lightgreen", borderRadius: "5px" }}>
            <i className="fa-solid fa-arrow-up"></i> 0.96%
          </small>
          <small className="mt-3">(24H)</small>
        </div>
        <small className="m-3">&#8377; 7,290,482.00</small>
        <div ref={containerRef} id="tradingview_chart" className="w-full h-96 rounded-lg mt-3"></div>
      </div>
    </>
  );
};

export default TradingViewChart;

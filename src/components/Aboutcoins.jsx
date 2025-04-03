import React from 'react';
import abcoins1 from './images/abcoins1.jpeg'
import abcoins2 from './images/abcoins2.jpeg'

const Button = ({ backgroundColor, title, buttonText }) => {
  return (
    <div style={{ 
      background: backgroundColor, 
      padding: '20px', 
      borderRadius: '10px', 
      display: 'inline-block', 
      margin: '10px', 
      width: '500px', 
      textAlign: 'center' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={abcoins1} alt="icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
        <h2 style={{ color: '#fff', fontSize: '18px' }}>{title}</h2>
      </div>
      <button style={{ 
        backgroundColor: '#fff', 
        color: '#000', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        border: 'none', 
        cursor: 'pointer', 
        marginTop: '10px' 
      }}>
        {buttonText} &rarr;
      </button>
    </div>
  );
};

const AboutUI = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '0px' }}>
      <Button 
        backgroundColor="linear-gradient(to right, #00c6ff, #0072ff)" 
        title="Calculate your Profits" 
        buttonText="Check Now" 
      />
      <Button 
        backgroundColor="linear-gradient(to right, #feb47b, #ff7e5f)" 
        title="Calculate your tax liability" 
        buttonText="Check Now" 
      />
    </div>
  );
};

const Aboutcoins = () => {
    return (
        <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">
          <div>
            <h4><b>About Bitcoin</b></h4>
            <section className="pt-3">
              <h5>What is Bitcoin?</h5>
              <p>
                Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M.
              </p>
            </section>
            <hr/>
            <section className="py-0">
              <h5>Lorem ipsum dolor sit amet</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
              </p>
              <p>
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
              </p>
            </section>
            <hr/>
            <section className=" py-0">
              <h4>Already Holding Bitcoin?</h4>
              <AboutUI/>
            </section>
            
            <p className="my-0">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>
    );
};

export default Aboutcoins;
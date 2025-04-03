import React from 'react'
import sblock1 from './images/sblock1.png'
import sblocks2 from './images/sblocks2.png'

const Sentiments = () => {
    return (
        <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">
            <h4><b>Sentiment</b></h4>
            <h5 className="pt-3">Key Events</h5>
            <div className='row' style={{display:'flex' }}>
                <div className='col-11 col-md-5' id="sblock1" style={{border:'1px solid #e8f4fd',margin:'1em', display:'flex' ,backgroundColor:'#e8f4fd' , borderRadius:'1em'}}>
                    <img src={sblock1} alt='image'  style={{marginTop:'1em', marginLeft:'.5em'}} height={'30%'} width={'30%'}/>
                    <div style={{marginTop:'1em', marginLeft:'.5em'}}>
                    <h6 style={{fontSize:'1.1em'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, est aut impedit</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sit fuga sapiente, mollitia ab minima dolorem perspiciatis, consequatur, ipsam error nulla doloribus. Officia, tenetur voluptatem. </p>
                    </div>
                </div>
                <div className='col-11 col-md-5' id="sblock2" style={{border:'1px solid #ebf9f4',margin:'1em' , display:'flex' ,backgroundColor:'#ebf9f4' , borderRadius:'1em'}}>
                    <img src={sblocks2} alt='image' style={{marginTop:'1em', marginLeft:'.5em'}}  height={'30%'} width={'30%'}/>
                    <div style={{marginTop:'1em', marginLeft:'.5em'}}>
                    <h6 style={{fontSize:'1.1em'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, est aut impedit</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sit fuga sapiente, mollitia ab minima dolorem perspiciatis, consequatur, ipsam error nulla doloribus. Officia, tenetur voluptatem. </p>
                    </div>
                </div>
            </div>

            {/* Analyst Estimates Section */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent:"center" }}>
                <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#e8f4fd',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.6em',
                    color: '#00b386',
                    fontWeight: 'bold'
                }}>76%
                </div>
                <div style={{width:"60%",marginLeft:"30px"}}>
                    <div class="option">
                        <span class="label">Buy</span>
                        <div class="bar buy"></div>
                        <span class="percentage">76%</span>
                    </div>
                    <div class="option">
                        <span class="label">Hold</span>
                        <div class="bar hold"></div>
                        <span class="percentage">8%</span>
                    </div>
                    <div class="option">
                        <span class="label">Sell</span>
                        <div class="bar sell"></div>
                        <span class="percentage">16%</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sentiments

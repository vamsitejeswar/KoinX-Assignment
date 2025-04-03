import React from 'react'


const Sentiments = () => {
    return (
        <div className="bg-white my-4 p-4" style={{borderRadius:"10px"}} id="aboutcoins">
            <h4><b>Tokenomics</b></h4>
            <h5 className='pt-3 pb-3'>Initial Distribution</h5>
            <div class="container">
                <div class="chart-container">
                    <div class="chart"></div>
                </div>
                <div class="legend">
                    <div class="legend-item">
                        <div class="legend-color blue"></div>
                        <span>Crowdsale investors: 80%</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color orange"></div>
                        <span>Foundation: 20%</span>
                    </div>
                </div>
            </div>
            <p className='pt-3 m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae earum pariatur quo debitis quam? Minus, ratione natus, voluptates mollitia saepe praesentium ipsa voluptatem obcaecati hic nihil numquam nesciunt id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nam minus voluptas ea asperiores, corrupti vel sequi porro, ullam odit aspernatur suscipit quae? Labore provident nemo quos totam ut ab.</p>

        </div>
    )
}

export default Sentiments

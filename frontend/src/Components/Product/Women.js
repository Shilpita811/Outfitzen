import React from 'react'
import './Women.css'
import w3 from '../../images/ww3.jpg'
import w4 from '../../images/Women/W4.jpg'
import w5 from '../../images/ww2.jpg'
import w6 from '../../images/ww5.jpg'
import w7 from '../../images/ww6.jpg'


const Women = () => {
    return (
        <div id="wrap">
            <div id="columns" className="columns_4">
                <figure>
                    <img src={w3} alt="Sharara Set"/>
                    <figcaption>Shirt</figcaption>
                    <span className="price">Rs 534</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w4} alt='Top With Palazzo'/>
        
                    <figcaption>Skirt</figcaption>
                    <span className="price">Rs 544</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w5} alt='Shirt'/>

                    <figcaption>grown</figcaption>
                    <span className="price">Rs 854</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w6} alt='Shirt'/>
                    {/* <img src="https://i.imgur.com/SZmPJ7W.jpg" alt="Polka Dots" /> */}
                    <figcaption>Drop Shoulder Shirt</figcaption>
                    <span className="price">Rs 944</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w7} alt='Shirt'/>

                    {/* <img src="https://i.imgur.com/OiEMgMx.jpg" alt="Blue Spots" /> */}
                    <figcaption>Formal Wide Leg Straight Pant</figcaption>
                    <span className="price">Rs 974</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>

    )
}

export default Women;
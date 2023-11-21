import React from 'react'
import './Women.css'
import w3 from '../../images/Women/W3.jpg'
import w4 from '../../images/Women/W4.jpg'
import w5 from '../../images/Women/W5.jpg'
import w6 from '../../images/Women/W6.jpg'
import w7 from '../../images/Women/W7.jpg'


const Women = () => {
    return (
        <div id="wrap">
            <div id="columns" className="columns_4">
                <figure>
                    <img src={w3} alt="Sharara Set"/>
                    <figcaption>Sharara Set</figcaption>
                    <span className="price">$34</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w4} alt='Top With Palazzo'/>
        
                    <figcaption>Top With Palazzo</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w5} alt='Shirt'/>

                    <figcaption>Shirt</figcaption>
                    <span className="price">$54</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w6} alt='Shirt'/>
                    {/* <img src="https://i.imgur.com/SZmPJ7W.jpg" alt="Polka Dots" /> */}
                    <figcaption>Drop Shoulder Shirt</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                <img src={w7} alt='Shirt'/>

                    {/* <img src="https://i.imgur.com/OiEMgMx.jpg" alt="Blue Spots" /> */}
                    <figcaption>Formal Wide Leg Straight Pant</figcaption>
                    <span className="price">$74</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>

    )
}

export default Women;
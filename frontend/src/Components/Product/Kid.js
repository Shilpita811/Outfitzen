import React from 'react'
import './Kid.css'
import w1 from '../../images/s1.jpg'
import w2 from '../../images/s2.jpg'
import w3 from '../../images/s3.jpg'
import w4 from '../../images/s4.jpg'
import w5 from '../../images/s5.jpg'


const Kids = () => {
    return (
        <div id="wrap">
            <div id="columns" className="columns_4">
                <figure>
                    <img src={w1} alt="Red Flowy" />
                    <figcaption>Grey Flowy</figcaption>
                    <span className="price">Rs 944/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w2} alt="Yellow Button-Up" />
                    <figcaption>Black</figcaption>
                    <span className="price">Rs 844/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w3} alt="Put a Bird On It" />
                    <figcaption>white top</figcaption>
                    <span className="price">Rs 644/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w4} alt="Polka Dots" />
                    <figcaption>Brown Blazer</figcaption>
                    <span className="price">Rs 440/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w5} alt="Blue Spots" />
                    <figcaption>White Shirt</figcaption>
                    <span className="price">Rs 540/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>

    )
}

export default Kids;
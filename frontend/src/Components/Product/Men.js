import React from 'react'
import './Men.css'
import w1 from '../../images/mn1.jpg'
import w2 from '../../images/mn2.jpg'
import w3 from '../../images/mn3.jpg'
import w4 from '../../images/mn4.jpg'
import w5 from '../../images/mn5.jpg'



const Men = () => {
    return (
        <div id="wrap">
            <div id="columns" className="columns_4">
                <figure>
                    <img src={w1} alt="Red Flowy" />
                    <figcaption>Off White</figcaption>
                    <span className="price">Rs 844/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w2}alt="Yellow Button-Up" />
                    <figcaption>White shirt</figcaption>
                    <span className="price">Rs 944/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w3} alt="Put a Bird On It" />
                    <figcaption>Grey Shirt</figcaption>
                    <span className="price">Rs 350/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w4} alt="Polka Dots" />
                    <figcaption>White T-shirt</figcaption>
                    <span className="price">Rs 944/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src={w5} alt="Blue Spots" />
                    <figcaption>Hoodie</figcaption>
                    <span className="price">RS 449/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>

    )
}

export default Men;
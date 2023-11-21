import React from 'react'
import './Kid.css'

const Kids = () => {
    return (
        <div id="wrap">
            <div id="columns" className="columns_4">
                <figure>
                    <img src="https://i.imgur.com/x1IZjjy.jpg" alt="Red Flowy" />
                    <figcaption>Red Flowy</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src="https://i.imgur.com/Jv8IWKQ.jpg" alt="Yellow Button-Up" />
                    <figcaption>Yellow Button-Up</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src="https://i.imgur.com/MpLejRu.jpg" alt="Put a Bird On It" />
                    <figcaption>Put a Bird On It</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src="https://i.imgur.com/SZmPJ7W.jpg" alt="Polka Dots" />
                    <figcaption>Polka Dots</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure>
                    <img src="https://i.imgur.com/OiEMgMx.jpg" alt="Blue Spots" />
                    <figcaption>Blue Spots</figcaption>
                    <span className="price">$44</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>

    )
}

export default Kids;
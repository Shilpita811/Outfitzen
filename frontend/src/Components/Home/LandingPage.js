import React from 'react';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <div className='banner'>
        <p>Welcome To OutfitZen</p>
        {/* <h1>Every product is special</h1> */}
        <a href='#wrap'>
          <button>
            Scroll
          </button>
        </a>
      </div>
      <div id="wrap">
        <h1>Product</h1>
            <div id="columns" className="columns_4">
                <figure className='figure'>
                    <img src="https://i.imgur.com/x1IZjjy.jpg" alt="Red Flowy" />
                    <figcaption>Red Flowy</figcaption>
                    <span className="price">Rs 4500/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure className='figure'>
                    <img src="https://i.imgur.com/Jv8IWKQ.jpg" alt="Yellow Button-Up" />
                    <figcaption>Yellow Button-Up</figcaption>
                    <span className="price">Rs 5400/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure className='figure'>
                    <img src="https://i.imgur.com/MpLejRu.jpg" alt="Put a Bird On It" />
                    <figcaption>Put a Bird On It</figcaption>
                    <span className="price">Rs 1280/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure className='figure'>
                    <img src="https://i.imgur.com/SZmPJ7W.jpg" alt="Polka Dots" />
                    <figcaption>Polka Dots</figcaption>
                    <span className="price">Rs 5400/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>

                <figure className='figure'>
                    <img src="https://i.imgur.com/OiEMgMx.jpg" alt="Blue Spots" />
                    <figcaption>Blue Spots</figcaption>
                    <span className="price">Rs 3400/-</span>
                    <a className="button" href="#">
                        Buy Now
                    </a>
                </figure>
            </div>
        </div>
    </>
  )
}

export default LandingPage
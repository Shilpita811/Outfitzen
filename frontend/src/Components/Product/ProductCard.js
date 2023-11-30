import React from 'react'
import './ProductCard.css'
import w2 from '../../images/ww6.jpg'
import w3 from '../../images/mn7.jpg'
import w4 from '../../images/kid1.jpg'


const ProductCard = () => {
  return (
    <div id="wrap">
      <div id="columns" className="columns_4">
        <figure>
          <img src={w2}/>
          <figcaption>Womens'Wear</figcaption>
          {/* <span className="price">$44</span> */}
          <a className="button" href="/women">
            Explore Now
          </a>
        </figure>

        <figure>
          <img src={w4} />
          <figcaption>Kids' Fashion</figcaption>
          {/* <span className="price">$44</span> */}
          <a className="button" href="/Kids">
            Explore Now
          </a>
        </figure>

        <figure>
          <img src={w3} />
          <figcaption>Mens'Collection</figcaption>
          {/* <span className="price">$44</span> */}
          <a className="button" href="/Men">
            Explore Now
          </a>
        </figure>
      </div>
    </div>

  )
}

export default ProductCard
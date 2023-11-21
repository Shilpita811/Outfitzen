import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div id="wrap">
      <div id="columns" className="columns_4">
        <figure>
          <img src="Women1.jpg"/>
          <figcaption>Womens'Wear</figcaption>
          {/* <span className="price">$44</span> */}
          <a className="button" href="/women">
            Explore Now
          </a>
        </figure>

        <figure>
          <img src="https://i.imgur.com/sPxEkEI.jpg" alt="Green and Black Flowers" />
          <figcaption>Kids' Fashion</figcaption>
          {/* <span className="price">$44</span> */}
          <a className="button" href="/Kids">
            Explore Now
          </a>
        </figure>

        <figure>
          <img src="https://i.imgur.com/S3Umfmb.jpg" alt="Black Dots" />
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
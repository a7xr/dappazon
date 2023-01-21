import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Rating from "./Rating";

import close from "../assets/close.svg";

const Product = ({ item, provider, account, dappazon, togglePop }) => {
  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <img src={item.image} alt="Product" />
        </div>
        <div className="product__overview">
          <h1>{item.name}</h1>

          <Rating value={item.rating} />

          <hr />

          <p>{item.address}</p>

          <h2>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h2>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;

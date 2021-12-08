import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
/*
    Fetcha listan från API:t
    Rendera ut länkar till våra undersidor
*/

export default function ProductList() {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const url =
      "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products.json";
    fetch(url)
    .then(res => res.json())
    .then(data => setProductList(data))
  }, []);
  return (
    <div>
      {
        productList && Object.entries(productList).map(item => {
          const key = item[0]
          const productItem = item[1]
          return (
            <>
              <p key={key}>
                <Link to={`/products/${key}`}>{productItem.name}</Link>
              </p>
              <img 
                src={productItem.images[0].src.small} 
                alt={productItem.images[0].alt}
              />
            </>
          )
        })
      }
    </div>
  );
}

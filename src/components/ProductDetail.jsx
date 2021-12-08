import React, {useState, useEffect} from "react";

export default function ProductDetail(props) {
  const [productItem, setProductItem] = useState(null)

  useEffect(() => {
    const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products/${props.id}.json`
    fetch(url)
    .then(res => res.json())
    .then( data => setProductItem(data))
  }, [])

  return (
    <div>
      {props.id}
      {productItem && (
        <>
          {productItem.name}
        </>

      )}
    </div>
  );
}

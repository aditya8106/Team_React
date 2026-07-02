import React from "react";
import { useState } from "react";

const ProductPage= () => {
  const products = ["apple", "banana", "milk", "bread", "eggs"];
  const [quantitys, setQuantity] = useState(
    products.map(() => ({ quantity: 0 }))
  );
  const totalitems = quantitys.reduce(
    (sum, quantity) => sum + quantity.quantity,
    0
  );

  const handleAdds = (index) => {
    const updateaQuantity = [...quantitys];
    updateaQuantity[index].quantity++;
    setQuantity(updateaQuantity);
  };
  const handleDownvote = (index) => {
    const updateVoes = [...quantitys];
    updateVoes[index].quantity--;
    setQuantity(updateVoes);
  };

  return (
    <div className="flex wrap justify-content-center mt-30 gap-30">
      <h2>totalitems : {totalitems} </h2>
      {products.map((aspect, index) => {
        return (
          <div key={index} className="pa-10 w-300 card">
            <h2>{aspect}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                onClick={() => handleAdds(index)}
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
              >
                ➕
              </button>
              <button
                onClick={() => handleDownvote(index)}
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
              >
                ➖
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              quantity: <strong>{quantitys[index].quantity}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;

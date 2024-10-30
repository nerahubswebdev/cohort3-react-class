import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Fulldetailspage() {
  const { id } = useParams();
  console.log("the hdhdh :", id);

  const [singleProductData, setSingleProductData] = useState();

  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        ).then((res) => res.json());
        if (response) {
          setSingleProductData(response);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, [id]);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-red-600">
        {singleProductData?.title}
      </h3>
      <p>{singleProductData?.description}</p>
      <p>{singleProductData?.category}</p>
      <p>{singleProductData?.price}</p>

      <div>
        <img
          src={singleProductData?.image}
          alt="hfhfhf"
          className="w-24 h-24 object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

export default Fulldetailspage;

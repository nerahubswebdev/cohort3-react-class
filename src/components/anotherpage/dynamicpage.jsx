import React from "react";
import { useParams } from "react-router-dom";

function Dynamicpage() {
  const params = useParams();

  console.log("the params of this component : ", params);

  return (
    <div>
      <p>dynamicpage jdjdjdjdjdjdjdjdjjd</p>
      <p>dynamicpage jdjdjdjdjdjdjdjdjjd</p>
      <p>dynamicpage jdjdjdjdjdjdjdjdjjd</p>
      <p>dynamicpage jdjdjdjdjdjdjdjdjjd</p>
      <p>dynamicpage jdjdjdjdjdjdjdjdjjd</p>
    </div>
  );
}

export default Dynamicpage;

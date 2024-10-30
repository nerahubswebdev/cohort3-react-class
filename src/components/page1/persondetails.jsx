import React from "react";
import { Link } from "react-router-dom";

function Persondetails({ personData }) {
  console.log("the props coming : ", personData);

  return (
    <Link to={`/page1/${personData.id}`}>
      <div className="bg-green-200 rounded-xl p-3 cursor-pointer">
        <h3 className="text-2xl font-semibold text-red-600">
          {personData.title}
        </h3>
        <p>{personData.category}</p>
        <p>{personData.description}</p>
        <p>{personData.price}</p>
        <div>
          <img
            src={personData.image}
            alt="hfhfhf"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
}

export default Persondetails;

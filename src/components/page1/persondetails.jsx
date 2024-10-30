import React from "react";
import { Link } from "react-router-dom";

function Persondetails({ personData }) {
  console.log("the props coming : ", personData);

  return (
    <Link to={`/page1/${personData.name}`}>
      <div className="bg-green-200 rounded-xl p-3 cursor-pointer">
        <h3 className="text-2xl font-semibold text-red-600">
          {personData.name}
        </h3>
        <p>{personData.location}</p>
        <p>{personData.age}</p>
        <p>{personData.savings}</p>
        <p>{personData.voted ? "Voted" : "not voted"}</p>
      </div>
    </Link>
  );
}

export default Persondetails;

import React from "react";
import { useParams } from "react-router-dom";

function Fulldetailspage() {
  const people = [
    {
      name: "Alice",
      location: "New York",
      age: 28,
      savings: 12000,
      voted: true,
    },
    {
      name: "Bob",
      location: "Los Angeles",
      age: 34,
      savings: 15000,
      voted: false,
    },
    {
      name: "Charlie",
      location: "Chicago",
      age: 25,
      savings: 8000,
      voted: true,
    },
    {
      name: "Diana",
      location: "Miami",
      age: 30,
      savings: 20000,
      voted: true,
    },
    {
      name: "Ethan",
      location: "Dallas",
      age: 22,
      savings: 5000,
      voted: false,
    },
    {
      name: "Fiona",
      location: "Seattle",
      age: 29,
      savings: 18000,
      voted: true,
    },
    {
      name: "George",
      location: "San Francisco",
      age: 40,
      savings: 25000,
      voted: true,
    },
    {
      name: "Hannah",
      location: "Boston",
      age: 35,
      savings: 30000,
      voted: false,
    },
    {
      name: "Ian",
      location: "Atlanta",
      age: 27,
      savings: 7000,
      voted: true,
    },
    {
      name: "Julia",
      location: "Denver",
      age: 31,
      savings: 9000,
      voted: false,
    },
  ];
  const { id } = useParams();
  console.log("the hdhdh :", id);

  const fulldetail = people?.filter((b) => b.name === id);

  return <div>fulldetailspage</div>;
}

export default Fulldetailspage;

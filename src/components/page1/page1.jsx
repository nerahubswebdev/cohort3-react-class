import React, { useState, useEffect } from "react";
import Persondetails from "./persondetails";

function Page1() {
  // const people = [
  //   {
  //     name: "Alice",
  //     location: "New York",
  //     age: 28,
  //     savings: 12000,
  //     voted: true,
  //   },
  //   {
  //     name: "Bob",
  //     location: "Los Angeles",
  //     age: 34,
  //     savings: 15000,
  //     voted: false,
  //   },
  //   {
  //     name: "Charlie",
  //     location: "Chicago",
  //     age: 25,
  //     savings: 8000,
  //     voted: true,
  //   },
  //   {
  //     name: "Diana",
  //     location: "Miami",
  //     age: 30,
  //     savings: 20000,
  //     voted: true,
  //   },
  //   {
  //     name: "Ethan",
  //     location: "Dallas",
  //     age: 22,
  //     savings: 5000,
  //     voted: false,
  //   },
  //   {
  //     name: "Fiona",
  //     location: "Seattle",
  //     age: 29,
  //     savings: 18000,
  //     voted: true,
  //   },
  //   {
  //     name: "George",
  //     location: "San Francisco",
  //     age: 40,
  //     savings: 25000,
  //     voted: true,
  //   },
  //   {
  //     name: "Hannah",
  //     location: "Boston",
  //     age: 35,
  //     savings: 30000,
  //     voted: false,
  //   },
  //   {
  //     name: "Ian",
  //     location: "Atlanta",
  //     age: 27,
  //     savings: 7000,
  //     voted: true,
  //   },
  //   {
  //     name: "Julia",
  //     location: "Denver",
  //     age: 31,
  //     savings: 9000,
  //     voted: false,
  //   },
  // ];

  // console.log("the people array : ", people);

  // state for holding people data
  //const [peopleData, setPeopleData] = useState(people);

  //console.log("people data from state :", peopleData);

  // getting data from fake api
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products").then(
          (res) => res.json()
        );
        if (response) {
          setProductData(response);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, []);

  console.log("product from state : ", productData);

  return (
    <div>
      <h1>the people data</h1>
      {productData?.length < 1 ? (
        <div className="flex justify-center items-center h-full">
          <h3 className="font-bold text-orange-500 text-xl animate-pulse transition duration-200 ease-in">
            Loading.....
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {productData?.map((pers) => (
            <Persondetails key={pers.id} personData={pers} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page1;

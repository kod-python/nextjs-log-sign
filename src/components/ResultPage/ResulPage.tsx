"use client";
import React, { useEffect, useState } from "react";

type drink = { idDrink: string; strDrink: string; strDrinkThumb: string };

const ResultPage = () => {
  const [drinks, setDrinks] = useState<drink[]>([]);

  useEffect(() => {
    const getDrinks = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
      );

      // FOR FETCH
      const data = await response.json();
      // console.log(data.drinks)
      setDrinks(data.drinks);

      // FOR FETH ENDS HERE

      // with image

      // const data: Omit<Person, 'imageUrl'>[] = await response.json();

      // const peopleWithImages = data.map(person => ({
      //   ...person,
      //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCx3fNCN9p0iHGfu3rhuIxGd0GIS03FaoRazzHU-sfaQ&s"
      // }));

      // setPeople(peopleWithImages);
    };
    // image ends here

    getDrinks();
  }, []);

  console.log(drinks);

  return (
    <div className="p-[300px] m-[100px]  space-y-5 ">
      <h1>json placeholder</h1>
      <div className="flex flex-wrap justify-center  mx-4">
        {drinks.map((drink) => (
          <div
            key={drink.idDrink}
            className=" shadow-lg  p-[30px]  w-1/3  mb-3 "
          >
            <img
              src={drink.strDrinkThumb}
              alt="drinks"
              className=" w-[200px] h-[200px] shadow-md shadow-black hover:transition-transform hover:scale-[1.2]"
            />
            <p className="text-center mt-[20px] pb-[30px]">{drink.strDrink}</p>

            <div className="flex justify-center text-white">
              <button className="py-2 px-4 bg-blue-500 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return(
  //   <div className="space-y-5 ">
  //     <h1>json placeholder</h1>

  //     {drinks.map((drinks) => (
  //       <div key={drinks.idDrink}>
  //         <img src={drinks.strDrinkThumb} alt="drinks" className="w-[300px] h-[300px] shadow-md shadow-black hover:transition-transform  " />
  //         <p className="">
  //           {drinks.strDrink} </p>

  //           <p className="text-blue-700">{drinks.strDrinkThumb}</p>
  //           {/* <p className="text-red-700">{drinks.userId}</p> */}
  //           {/* <img src={Drink.imageUrl} alt={`Person ${Drink.id}`} /> */}

  //       </div>
  //     ))}
  //   </div>
  // );
};

export default ResultPage;

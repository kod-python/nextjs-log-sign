"use client";
import React, { useEffect, useState } from "react";

type Person = { id: number; title: string; userId: number; imageUrl: string };

const ResultPage = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const getPeople = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      const data: Omit<Person, 'imageUrl'>[] = await response.json();
      
    
      const peopleWithImages = data.map(person => ({
        ...person,
        imageUrl: "https://via.placeholder.com/150"
      }));
      
      setPeople(peopleWithImages);
    };

    getPeople();
  }, []);

  console.log(people);

  return (
    <>
      <h1>json placeholder</h1>
      {people.map((person) => (
        <div key={person.id} className="text-orange-400">
          <p className="bg-pink-200">
            {person.id}
            <p className="text-blue-700">{person.title}</p>
            <p className="text-red-700">{person.userId}</p>
            <img src={person.imageUrl} alt={`Person ${person.id}`} />
          </p>
        </div>
      ))}
    </>
  );
};

export default ResultPage;

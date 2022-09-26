import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GetHero() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7227/api/superhero').then((res) => {
      setHeroes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      { heroes &&
        heroes.map(hero => {
          return (
            <div key={hero.id} style={{border: "1px solid black", width: "max-content", padding: "4px", margin: "4px"}}>
              <p>{hero.heroName}</p>
              <p>{"Name: " + hero.firstName + " " + hero.lastName}</p>
              <p>{"From: " + hero.place}</p>
            </div>
            
          )
        })
      }
    </>
  )
};
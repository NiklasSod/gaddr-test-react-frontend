import axios from 'axios';
import { useEffect, useState } from 'react';
import { urlSuperHero } from './endpoints';

export default function GetHero() {
  const [heroes, setHeroes] = useState([]);

  const deleteHero = (e, id) => {
    e.preventDefault();
    axios.delete(`${urlSuperHero}?id=${id}`);
    window.location.reload();
  };

  useEffect(() => {
    axios.get(urlSuperHero).then((res) => {
      setHeroes(res.data);
    });
  }, []);

  return (
    <>
      { heroes &&
        heroes.map(hero => {
          return (
            <div key={hero.id} style={{border: "1px solid black", width: "max-content", padding: "4px", margin: "4px"}}>
              <p>{"#" + hero.id + ": " + hero.heroName}</p>
              <p>{"Name: " + hero.firstName + " " + hero.lastName}</p>
              <p>{"From: " + hero.place}</p>
              <button onClick={e => deleteHero(e, hero.id)}>Delete this hero</button>
            </div>
            
          )
        })
      }
    </>
  )
};
import axios from 'axios';
import { useState } from 'react';
import { urlSuperHero } from './endpoints';

export default function AddHero() {
  const [newHero, setNewHero] = useState({
    heroName: "",
    firstName: "",
    lastName: "",
    place: ""
  });

  const handleInputs = (e) => {
    e.preventDefault();
    setNewHero({ ...newHero, [e.target.name]: e.target.value });
  };

  const addHeroToDb = (e) => {
    e.preventDefault();
    axios
      .post(urlSuperHero, newHero)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <form 
      style={{position: 'absolute', right: 0, top: 0, marginRight: '8em', marginTop: '4em', border: '2px solid black'}}
      onSubmit={(e) => addHeroToDb(e)}
    >
      <label>Heroname: </label>
      <input onChange={(e) => handleInputs(e)} type="text" name="heroName"></input>
      <br />
      <label>Firstname: </label>
      <input onChange={(e) => handleInputs(e)} type="text" name="firstName"></input>
      <br />
      <label>Lastname: </label>
      <input onChange={(e) => handleInputs(e)} type="text" name="lastName"></input>
      <br />
      <label>Place: </label>
      <input onChange={(e) => handleInputs(e)} type="text" name="place"></input>
      <br />
      <button type="submit">Add Hero</button>
    </form>
  )
};
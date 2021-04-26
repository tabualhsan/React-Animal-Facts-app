import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = (
  <img
   className = 'background'
   alt= 'ocean'
   src = '/images/ocean.jpg'
  />
);

const images = [];

for (const animal in animals){
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick ={displayfact}
    />
  )
}

function displayfact(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionalIndex = Math.floor(Math.random()
* animalInfo.facts.length);
  const funfact = animalInfo.facts[optionalIndex]; 
  document.getElementById('fact').innerHTML = funfact;
}
const animalFacts = (
  <div>
   <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
  {background}
  <p id='fact'></p>
  <div className='animals'>
    {images}
  </div>
</div>
);
ReactDOM.render(animalfacts, document.getElementById("root"));
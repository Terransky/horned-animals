// The Main component needs to render at least two copies of a component called HornedBeasts.

// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

//The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';

import CardColumns from 'react-bootstrap/CardDeck';

import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = data.map( animal => { //here we create an array of objects from data.json and assign the properties
      return <HornedBeasts // this passes the json props to the HornedBeast component (like a template) and assigns it to the array
        name = {animal.keyword}
        title = {animal.title}
        image_url = {animal.image_url}
        description = {animal.description}
        />
    });
    
    return (
      <main>
      <CardColumns>
        {beastArray} {/*this displays the whole array of components we made earlier*/}
      </CardColumns>
    </main>
    );
  }
}

export default Main;

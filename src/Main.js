// The Main component needs to render at least two copies of a component called HornedBeasts.

// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

/* 
Feature 1: How are we implementing it?
 The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

Feature 2: How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

Feature 3: How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
*/

import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';
import data from './data.json'; //an array of objects with properties: image_url, title, description, keyword, horns

class Main extends React.Component {
  render() {
    return (
    <main>
    </main>
    )
  }
}

export default Main;

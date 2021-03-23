// The Main component needs to render at least two copies of a component called HornedBeasts.

// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
    <main>
      <HornedBeasts name='1' title='whatever' imgUrl='https://placehold.it/400x300/444' description='whatever' />
      <HornedBeasts name='2' title='whatever' imgUrl='https://placehold.it/400x300/444' description='different' />
    </main>
    );
  }
}

export default Main;
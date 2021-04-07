import './App.css';
import React from 'react';

import CoolNumber from './CoolNumber.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';

import data from './data.json'; //an array of objects with properties: image_url, title, description, keyword, horns

class App extends React.Component {
  //state: lets us store information within a component that's going to change
  constructor(props) {
    super(props); //always needed for constructors in React component
    this.state = { //sets the state, must be an object in React, can only be done once with an = sign
      numberofExclamationPoints: 1,
    };
  }

  buttonClicked = () => {
    console.log('button clicked');
    // this.state.numberofExclamationPoints++ doesn't work. React treats states specially.
    this.setState({
      numberofExclamationPoints: this.state.numberofExclamationPoints + 1
    });
  }

  render() {
    let exclamationPoints = '';
    for (let i = 0; i < this.state.numberofExclamationPoints; i++) {
      exclamationPoints += '!';
    }
    return (
      <div>
        <header>
          <Header />
          <h2>Get excited! {this.state.numberofExclamationPoints} {exclamationPoints}</h2>
          <button onClick={this.buttonClicked}>Get more excited!</button>
          <Button variant='light'>Bootstrap capital B Button</Button>
        </header>

        <main>
          <Main />
        </main>
            
        <footer>
          <Footer />
        </footer>
      </div>

    );
  }
}


// deleted:
// logo.svg
// setupTests.js
// reportWebVitals.js
// from index.js, the import reportWebVitals and the last line
// most of the code in App.js
export default App;

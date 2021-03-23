import './App.css';
import React from 'react';

import CoolNumber from './CoolNumber.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
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

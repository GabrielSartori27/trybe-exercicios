import './App.css';
import Header from './Header';
import React from 'react';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
render() {
  return (
    <body>
      <main>
        <Header />
        <Content />
      </main>
      <Footer />
    </body>
    )
  }
}

export default App;

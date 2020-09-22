import React from 'react';
import { Navbar, Header, Choose, Articles, Footer  } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Choose/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

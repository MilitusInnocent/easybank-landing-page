import React from 'react';
import { Navbar, Header, Choose, Articles, Footer } from './components';
import './App.scss';

const App = () => (
  <div className="App">
    <Navbar/>
    <Header/>
    <Choose/>
    <Articles/>
    <Footer/>
  </div>
);

export default App;
import React from 'react'; 

import './App.css';
import MainContainer from './Main-container/Main-container';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <MainContainer/>
      <Sidebar/> 
      <Footer/>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function Websitepage(){
  return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  )
}


ReactDOM.render(<Websitepage/>,document.getElementById("root"));
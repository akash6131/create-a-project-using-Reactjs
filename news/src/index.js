import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './component/Header';



function Website(){
  return(
    <div>
        <Header/>
    </div>
  )
}
ReactDOM.render(<Website/>,document.getElementById("root"));
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>
          Akash
        </h1>
      </header>
      <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
        </tr>
          <tr>
            <td>Akash</td>
            <td>21</td>
            <td>ECE</td>
          </tr>
          <tr>
            <td>Guahn</td>
            <td>21</td>
            <td>ECE</td>
          </tr>
          <tr>
            <td>Barath</td>
            <td>20</td>
            <td>ECE</td>
          </tr>
      </table>

    </div>
  );
}

export default App;




// import React from 'react';

// function welcome(props){
//   return(
//     <div>
//       <h1>
//         Hello my dear friends {props.name}
//       </h1>
//       <h2>Full Stack</h2>
//       <h3>HTML</h3>
//       <h4>CSS</h4>
//       <h5>Javascript</h5>
//       <h6>React</h6>
//     </div>
//   )
// }

// export default welcome;
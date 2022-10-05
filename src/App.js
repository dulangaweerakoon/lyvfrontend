// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from "react"
import EventOperator from "./Components/EventOperator"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Components/Menu"
import Merchant from "./Components/Merchant";
import Consumer from "./Components/Consumer";

export default function App() {
  // return <EventOperator />
  // return <Menu

  return (
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
            <Routes>
              <Route exact path="/eo" element={<EventOperator />} />
                <Route exact path="/merchant" element={<Merchant />} />
                <Route exact path="/consumer" element={<Consumer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

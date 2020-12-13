// This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.

// import React from 'react'; this was in the module!?
// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";

// Inside the function, it seems that HTML is all that's returned. But actually, it's not HTML; it's a language called JSX that can represent HTML in JavaScript. Normally you can't add HTML to JavaScript, at least without making it a string. But it won't break the code in this case, because you're using webpack and React. Think of functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX behind the scenes is very similar to document.createElement().

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
// Let's add our own component to the App component. First, get rid of the starter JSX in App() and replace it with an empty <div>, as shown in the following example code:

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
          <div>
            <Gallery />
            <About /> 
          </div>       
      </main>
    </div>
  );
}

export default App;



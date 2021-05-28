import React from 'react';
import ReactDOM from 'react-dom';

// Render react into the DOM (show it on the website)
// first argument is the react element, second argument is the container in which to put the element
// usually, one puts a div with the id "root" and render the entire react app in that container
ReactDOM.render(<h1>pluppppp</h1>, document.querySelector("#root"));

// You can make your own react components
// A component is simply just a function that returns "JSX"
// JSX is whhen you use HTML syntax such as "<h1>plopp</h1>" in JS
function MyVeryCoolPlupp() {
   return <h1>cool plupp!!! 😎😎😎</h1>
}

// It is preferable that you only call "render" once, but here I do many times because it is an example
ReactDOM.render(<MyVeryCoolPlupp/>, document.querySelector("#root"));

function ReallyComplicatedComponent() {
   return (
      // you can write HTML almost like you would normally
      <main>
         <MyVeryCoolPlupp/>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, exercitationem!</p>
      </main>
   )
}

ReactDOM.render(<ReallyComplicatedComponent/>, document.querySelector("#root"));
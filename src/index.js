import ReactDOM from 'react-dom/client'; // builtin module
import React from 'react';
import Main from './Main'; // Importing Main Class Component

const root = ReactDOM.createRoot(document.getElementById('root')); // root id is defined inside index.html file

const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];
const message = "Programming with Harsh";

// Without JSX
const headerMessage = React.createElement("h1", {}, "Programming with Harsh"); // h1 -> Programming with Harsh
const nestedItem = React.createElement("ul",
  {},
  flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX, we can directly write HTML code in Js
const headerMessage2 = <h1>Programming with Harsh 2 + 2 = {2 + 2}</h1>
const nestedItem2 = <ul>
  {
    flowers.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  }
</ul>

const username = "Jitendra"; // string
const interests = ["Playing Cricket", "Watching Movies", "Playing with Kids"]; // array
const birth = { // object
    year: 2000,
    place: "Kanpur"
};

root.render(
  <Main username={username} interests={interests} birth={birth} />
);

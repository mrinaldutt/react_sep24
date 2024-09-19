import ReactDOM from 'react-dom/client'; // builtin module
import React from 'react';

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

root.render(
  nestedItem2
);

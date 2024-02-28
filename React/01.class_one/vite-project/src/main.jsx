import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

// const ReactElement  = {
//   type : 'a',
//   props : {
//     href : 'http://www.google.com',
//     children : 'Click me'
//   },
//   children : 'Click me to visit google.com'
// }


const anotherReactElement = (
  <a href="http://www.google.com" target="_blank">
    Click me to visit google.com
  </a>
);

const anotherUser = "Nazim Uddin";

const ReactElement = React.createElement(
  "a",
  {
    href: "http://www.google.com",
    target: "_blank",
  },
  "Click me to visit google.com",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <App />
    ReactElement
);

import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

//JSX React - is not HTML in JS, HTML-like or XML-like syntax
//JSX (transpiled before it  reaches the JS) - PARCEL - Babel
//JSX => React.createElement => ReactElement- JS Object => HtmlElement(render)

const jsxHeading = <h1 id="heading" className="head" tabIndex={1}>Namaste React using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


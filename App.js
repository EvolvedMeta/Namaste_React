import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

const jsxHeading = (<h1 id="heading" className="head" tabIndex={5}>Namaste React using JSX</h1>)
console.log(jsxHeading);

// React Functional Component
const HeadingComponent1 = () => { return <h1>Namaste React Functional Component</h1>};
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


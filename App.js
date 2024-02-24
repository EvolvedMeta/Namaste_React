import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

const Title = () => (<h1 id="heading" className="head" tabIndex={5}>Namaste React using JSX</h1>)

const HeadingComponent1 = () => { return <h1>Namaste React Functional Component</h1> };
const HeadingComponent2 = () => (
    <div id="container">
        <Title/>
        <h1>Namaste React Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);


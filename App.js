import React from "react";
import ReactDOM from "react-dom/client";
/**
 * If we try to print heading element it will return the object
 * {type:{}, Props:{}, and so on}
 * type have the HTML tag data like h1,img and so on
 * Props have the attribute details and children have the data that needs to printed
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "head" },
      "First Heading"
    ),
    React.createElement(
        "h3",
        { id: "subHead", key: "subHead" },
        "Sub Heading"
      ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render will take the heading object then covert it into the html elemnent

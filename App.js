const heading = React.createElement("h1", {id:"heading", attr:'xyc'}, "Hello World from React!");
console.log(heading); //Will Print the object ----> {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
/**
 * If we try to print heading element it will return the object
 * {type:{}, Props:{}, and so on}
 * type have the HTML tag data like h1,img and so on
 * Props have the attribute details and children have the data that needs to printed
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //render will take the heading object then covert it into the html elemnent

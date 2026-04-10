import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      title: "Margherita",
      description: "Tomato sauce, mozzarella, basil",
    }),
    React.createElement(Pizza, {
      title: "Pepperoni",
      description: "Tomato sauce, mozzarella, pepperoni",
    }),
    React.createElement(Pizza, {
      title: "Hawaiian",
      description: "Tomato sauce, mozzarella, ham, pineapple",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

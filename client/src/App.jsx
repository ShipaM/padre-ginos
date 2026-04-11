import { createRoot } from "react-dom/client";
import { Pizza } from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza title="Margherita" description="Tomato sauce, mozzarella, basil" />
      <Pizza
        title="Pepperoni"
        description="Tomato sauce, mozzarella, pepperoni"
      />
      <Pizza
        title="Hawaiian"
        description="Tomato sauce, mozzarella, ham, pineapple"
      />
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

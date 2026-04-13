import { useContext } from "react";
import { CartContext } from "./context";
import { Link } from "@tanstack/react-router";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's - Order Now</h1>
      </Link>
      <div className="nav-cart">
        🛒
        <span data-testid="cart-number" className="nav-cart-number">
          {cart?.length}
        </span>
      </div>
    </nav>
  );
};

export default Header;

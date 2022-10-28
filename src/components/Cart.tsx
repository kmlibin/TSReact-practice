import React from "react";

//styles and icons
import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEventHandler<HTMLButtonElement>) {
    this.setState((prev) => ({ isOpen: !prev.isOpen }))
  }

  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type="button"
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>2 pizza(s)</span>
        </button>
        <div
          className={CartCSS.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;

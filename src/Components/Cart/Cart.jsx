import { BsCart3 } from "react-icons/bs";
import './Cart.css';
import { Link } from "react-router-dom";
function Cart() {
  return (
    <>
    <Link to={"/ProductCart"}>
         <div className="Cart-logo">
        <div id="cart-icon">
          <BsCart3 />
          <div id="countingbar">0</div>
        </div>

        <span id="cart">Cart</span>
      </div>
    </Link>
     
    </>
  );
}
export default Cart;

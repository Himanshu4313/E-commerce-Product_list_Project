import { Link } from "react-router-dom";
import SearchBox from "../Search/Search";
import "./Header.css";
import Cart from "../Cart/Cart";
function Header() {
  return (
    <>
      <div className="Heading">
        <div>
          <Link to={"/"}>
            <p className="logo">PL</p>
          </Link>
        </div>

        <div>
          <SearchBox />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
}
export default Header;

// Card Components
import { Link } from "react-router-dom";
import "./PrintProductList.css";
function PrintProductList({ image, title, price , id }) {
  return (
    <>
      <div className="single-product-container-card">
        <Link to={`/ProductDetails/${id}`}>
          <div className="card-image">
            <img src={image} alt="cardImage" />
          </div>
        </Link>
        <div className="CardDetails">
          <p className="title">{title && title.slice(0, 30)}..more</p>
          <p className="Price">
            price:
            <span>{price}$</span>
          </p>
        </div>
        <div className="addtocartbtn">
          <button>Add to Card</button>
        </div>
      </div>
    </>
  );
}
export default PrintProductList;

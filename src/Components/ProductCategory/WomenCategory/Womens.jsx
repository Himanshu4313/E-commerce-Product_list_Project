import "./Womens.css";
function Womens({ image , title ,price }) {
  return (
    <>
      <div className="Womens-wrapper">
        <div className="Product">
          <div className="productImage">
            <img src={image} alt="Image" />
          </div>
          <div className="womensTitle">{title}</div>
          <div className="womensPrice">Price: {price} $</div>
          <button className="Button">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
export default Womens;

import "./Mens.css";
function Mens({ image, title, price }) {
  return (
    <> 
        
      <div className="Mens-wrapper">
        <div className="Product">
          <div className="productImage">
            <img src={image} alt="Image" />
          </div>
          <div className="mensTitle">{title}</div>
          <div className="mensPrice">Price: {price} $</div>
          <button className="Button">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
export default Mens;

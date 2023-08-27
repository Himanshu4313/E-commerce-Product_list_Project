import "./Electronics.css";
function Electronics({ image, title, price }) {
  return (
    <>
      <div className="electronics-product-wrapper">
        <div className="ElectronicsProduct">
          <div className="productImage">
            <img src={image} alt="Image" />
          </div>
          <div className="ElectronicTitle">{title}</div>
          <div className="ElectronicsPrice">Price: {price} $</div>
          <div className="Button">Add to Cart</div>
        </div>
      </div>
    </>
  );
}
export default Electronics;

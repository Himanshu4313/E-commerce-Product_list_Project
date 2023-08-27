import "./Jewellery.css";
function Jewellery({ image, title, price }) {
  return (
    <>
      <div className="jewellery-wrapper">
        <div className="JewelleryProduct">
          <div className="productImage">
            <img src={image} alt="Image" />
          </div>
          <div className="JewelleryTitle">{title}</div>
          <div className="JewelleryPrice">Price: {price} $</div>
          <div className="Button">Add to Cart</div>
        </div>
      </div>
    </>
  );
}
export default Jewellery;

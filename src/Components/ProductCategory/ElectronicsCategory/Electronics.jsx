import "./Electronics.css";
function Electronics({ ElectronicsDetails }) {
  return (
    <>
      <div className="electronics-product-wrapper">
        <h2>Electronics Category</h2>
        {ElectronicsDetails.map((ep, index) => {
          <div className="ElectronicsProduct">
            <div className="productImage">
              <img src={ep.image} alt="Image" />
            </div>
            <div className="ElectronicTitle">{ep.title}</div>
            <div className="ElectronicsPrice">Price: {ep.price}</div>
            <div className="Button">Add to Cart</div>
          </div>
        })}
      </div>
    </>
  );
}
export default Electronics;

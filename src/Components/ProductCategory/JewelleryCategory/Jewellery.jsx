import './Jewellery.css';
function Jewellery({JewelleryDetails}){
    return(
        <>
            <div className="jewellery-wrapper">
                <h1>Jewellery Category</h1>
                {
                    JewelleryDetails.map((jp , index) =>{
                        <div className="JewelleryProduct">
                        <div className="productImage">
                          <img src={jp.image} alt="Image" />
                        </div>
                        <div className="JewelleryTitle">{jp.title}</div>
                        <div className="JewelleryPrice">Price: {jp.price}</div>
                        <div className="Button">Add to Cart</div>
                      </div>
                    })
                }
            </div>
        </>
    );
}
export default Jewellery;
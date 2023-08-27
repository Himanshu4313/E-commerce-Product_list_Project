import './Womens.css';
function Womens({WomensDetails}){
    return (
        <>
        <div className="Womens-wrapper">
                <h1>Womens Category</h1>
                {
                    WomensDetails.map((wp , index) =>{
                        <div className="womensProduct">
                        <div className="productImage">
                          <img src={wp.image} alt="Image" />
                        </div>
                        <div className="womensTitle">{wp.title}</div>
                        <div className="womensPrice">Price: {wp.price}</div>
                        <div className="Button">Add to Cart</div>
                      </div>
                    })
                }
            </div>
        </>
    );
}
export default Womens;
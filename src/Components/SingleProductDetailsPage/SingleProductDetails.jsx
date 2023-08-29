import { useParams } from "react-router-dom";
import "./SingleProductDetails.css";
import useSingleProductdetails from "../../hooks/useSingleProductDetails";
function SingleProductDetails() {
  const { id } = useParams();
  const [singleProductDetailsState] = useSingleProductdetails(id);
  return (
    <>
      {singleProductDetailsState.isLoading ? (
        <div className="loading-circle">
          <h3>Loading...</h3>
          <div className="spainer"></div>
        </div>
      ) : (
        <div className="single-product-details-container">
          <div className="image-part">
            <img src={singleProductDetailsState.singleProductDetails.image} alt="image" />
          </div>
          <div className="details-part">
            <div className="single-product-title">
              <p className="Single-product-title">
                {" "}
                {singleProductDetailsState.singleProductDetails.title}{" "}
              </p>
            </div>
            <p className="single-product-price">
              Price : {singleProductDetailsState.singleProductDetails.price}$
            </p>
            <p className="single-product-rating">
              Rating: {singleProductDetailsState.singleProductDetails.rating}
            </p>

            <div className="buynowbtn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SingleProductDetails;

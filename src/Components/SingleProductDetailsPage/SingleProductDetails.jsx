import { useParams } from "react-router-dom";
import "./SingleProductDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
function SingleProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  const [singleProductDetails , setSingleProductDetails] = useState({});
  async function getSingleProductDetails() {
    setIsLoading(true);
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log(response);
      const Details = {
        image: response.data.image,
        title : response.data.title,
        price: response.data.price,
        rating: response.data.rating.rate,
        description : response.data.description,
      }    
    setSingleProductDetails(Details);
    setIsLoading(false);
  }

  useEffect(() => {
    getSingleProductDetails();
  }, []);

  return (
          <>
           {
              isLoading ?  <div className="loading-circle">
              <h3>Loading...</h3>
              <div className="spainer"></div>
            </div> : 
             <div className="single-product-details-container">
                 <div className="image-part">
                    <div>
                      <img src={singleProductDetails.image} alt="image" />
                    </div>
                 </div>
                 <div className="details-part">
                       <div className="single-product-title">
                        <p className="Single-product-title"> {singleProductDetails.title} </p> 
                        </div>
                       <p className="single-product-price">Price :{singleProductDetails.price}$</p>
                       <p className="single-product-rating">Rating: {singleProductDetails.rating}</p>

                 </div>
                 <div className="buynowbtn">
                         <button>Buy Now</button>
                 </div>
             </div>
           }
          </>
  );
         
}
export default SingleProductDetails;

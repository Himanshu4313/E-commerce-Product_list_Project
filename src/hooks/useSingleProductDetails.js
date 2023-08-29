import axios from "axios";
import { useEffect, useState } from "react";

function useSingleProductdetails(id) {
  const [singleProductDetailsState, setSingleProductDetailsState] = useState({
    isLoading: true,
    singleProductDetails: {},
  });
  async function getSingleProductDetails() {
    try {
      setSingleProductDetailsState((state) => ({ ...state, isLoading: true }));
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response);
      const Details = {
        image: response.data.image,
        title: response.data.title,
        price: response.data.price,
        rating: (response.data.rating) && response.data.rating.rate,
        description: response.data.description,
      };
      setSingleProductDetailsState((state) => ({
        ...state,
        singleProductDetails: Details,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Something went wrong...", error);
    }
  }
  useEffect(() => {
    getSingleProductDetails();
  }, []);
  return [singleProductDetailsState];
}
export default useSingleProductdetails;

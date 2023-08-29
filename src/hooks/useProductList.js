import axios from "axios";
import { useEffect, useState } from "react";

function useProductList() {
  const [productListState, setProductListState] = useState({
    isLoading: true,
    productDetails: {},
  });
  const productListURL = "https://fakestoreapi.com/products/";
  async function getProductList() {
    try {
        setProductListState((state) => ({ ...state, isLoading: true }));
    const response = await axios.get(productListURL);
    console.log(response);
    const updateProductDetails = {
      mens: [],
      womens: [],
      jewellery: [],
      electronics: [],
    };
    response.data.forEach((productObject) => {
      const product = {
        category: productObject.category,
        description: productObject.description,
        id: productObject.id,
        image: productObject.image,
        price: productObject.price,
        title: productObject.title,
        rating: productObject.rating.rate,
      };

      switch (productObject.category) {
        case "men's clothing":
          updateProductDetails.mens.push(product);
          break;
        case "jewelery":
          updateProductDetails.jewellery.push(product);
          break;
        case "women's clothing":
          updateProductDetails.womens.push(product);
          break;
        case "electronics":
          updateProductDetails.electronics.push(product);
          break;
        default:
          break;
      }
    });

    setProductListState((state) => ({
      ...state,
      productDetails: updateProductDetails,
      isLoading: false,
    })); 
    } catch (error) {
        console.error('Something went wrong..',error);
    }
   
  }
  useEffect(() => {
    getProductList();
  }, []);

  return [productListState];
}
export default useProductList;

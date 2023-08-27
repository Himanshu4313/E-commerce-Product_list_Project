import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import Mens from "../ProductCategory/MenCategory/Mens";
import Womens from "../ProductCategory/WomenCategory/Womens";
import Jewellery from "../ProductCategory/JewelleryCategory/Jewellery";
import Electronics from "../ProductCategory/ElectronicsCategory/Electronics";
function ProductList() {
  const [isLoading, setisLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({});
  const productListURL = "https://fakestoreapi.com/products/";
  async function getProductList() {
    setisLoading(true);
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

    setProductDetails(updateProductDetails);
    setisLoading(false);
  }
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-circle">
          <div className="spainer"></div>
        </div>
      ) : (
        <div>
            {/* Mens part */}
          <div className="mens-part">
            <h1 className="mens-category">Mens Category</h1>
            <div className="mens-product-wrapper">
              {productDetails.mens.map((mp) => (
                <Mens
                  key={mp.id}
                  image={mp.image}
                  title={mp.title}
                  price={mp.price}
                />
              ))}
            </div>
          </div>
          {/* womens part */}
          <div className="womens-part">
            <h1 className="womens-category">Womens Category</h1>
            <div className="womens-product-wrapper">
              {productDetails.womens.map((wp) => (
                  <Womens 
                  key={wp.id} 
                  title={wp.title}
                 image={wp.image} 
                 price={wp.price}/>
              ))}
            </div>
          </div>
         {/* Jewellery part */}
         <div className="jewellery-part">
            <h1 className="jewellery-category">Jewellery Category</h1>
            <div className="jewellery-product-wrapper">
              {productDetails.jewellery.map((wp) => (
                  <Jewellery 
                  key={wp.id} 
                  title={wp.title}
                 image={wp.image} 
                 price={wp.price}/>
              ))}
            </div>
          </div>
         {/* Electronics part */}
         <div className="electronic-part">
            <h1 className="electronic-category">Category</h1>
            <div className="electronic-product-wrapper">
              {productDetails.electronics.map((ep) => (
                  <Electronics
                  key={ep.id} 
                  title={ep.title}
                 image={ep.image} 
                 price={ep.price}/>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductList;

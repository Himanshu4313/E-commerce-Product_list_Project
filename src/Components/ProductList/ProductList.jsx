import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import PrintProductList from "../PrintProductList/PrintProductList";
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
          <h3>Loading...</h3>
          <div className="spainer"></div>
        </div>
      ) : (
        <div>
            {/* Mens part */}
          
           <div className="men-part">
               <h1>Mens Category</h1>
               <div className="product-wrapper">
                   {
                    productDetails.mens.map((mp) => 
                    <PrintProductList 
                    key={mp.id}
                    title={mp.title}
                    image={mp.image}
                    price={mp.price}
                    />)
                   }
               </div>
           </div>
          {/* womens part */}
          
          <div className="womens-part">
              <h1>Womens Category</h1>
              <div className="product-wrapper">
                {
                  productDetails.womens.map((wp) => 
                  <PrintProductList 
                  key={wp.id}
                  image={wp.image} 
                  title={wp.title} 
                  price={wp.price}
                  /> )
                }
              </div>
          </div>
         {/* Jewellery part */}
              <div className="jewellery-part">
                <h1>Jewellery Category</h1>
                <div className="product-wrapper">
                  {
                    productDetails.jewellery.map((jp) => 
                    <PrintProductList 
                    key={jp.id}
                    image={jp.image}
                    title={jp.title}
                    price={jp.price}
                    />
                    )
                  }
                </div>
              </div>
         {/* Electronics part */}
              <div className="electronics-part">
                   <h1>Electronics Category</h1>
                   <div className="product-wrapper">
                    {
                      productDetails.electronics.map((ep) => 
                      <PrintProductList 
                      key={ep.id}
                      image={ep.image}
                      title={ep.title}
                      price={ep.price}
                      />)
                    }
                   </div>
              </div>
        </div>
      )}
    </>
  );
}
export default ProductList;

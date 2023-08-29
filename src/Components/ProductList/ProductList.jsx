import "./ProductList.css";
import PrintProductList from "../PrintProductList/PrintProductList";
import useProductList from "../../hooks/useProductList";
function ProductList() {
  const [productListState] = useProductList();
  return (
    <>
      {productListState.isLoading ? (
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
              {productListState.productDetails.mens.map((mp) => (
                <PrintProductList
                  key={mp.id}
                  title={mp.title}
                  image={mp.image}
                  price={mp.price}
                  id={mp.id}
                />
              ))}
            </div>
          </div>
          {/* womens part */}

          <div className="womens-part">
            <h1>Womens Category</h1>
            <div className="product-wrapper">
              {productListState.productDetails.womens.map((wp) => (
                <PrintProductList
                  key={wp.id}
                  image={wp.image}
                  title={wp.title}
                  price={wp.price}
                  id={wp.id}
                />
              ))}
            </div>
          </div>
          {/* Jewellery part */}
          <div className="jewellery-part">
            <h1>Jewellery Category</h1>
            <div className="product-wrapper">
              {productListState.productDetails.jewellery.map((jp) => (
                <PrintProductList
                  key={jp.id}
                  image={jp.image}
                  title={jp.title}
                  price={jp.price}
                  id={jp.id}
                />
              ))}
            </div>
          </div>
          {/* Electronics part */}
          <div className="electronics-part">
            <h1>Electronics Category</h1>
            <div className="product-wrapper">
              {productListState.productDetails.electronics.map((ep) => (
                <PrintProductList
                  key={ep.id}
                  image={ep.image}
                  title={ep.title}
                  price={ep.price}
                  id={ep.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductList;

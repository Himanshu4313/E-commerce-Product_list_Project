import { Route, Routes } from "react-router-dom";
import ProductList from "../Components/ProductList/ProductList";
import SingleProductDetails from "../Components/SingleProductDetailsPage/SingleProductDetails";

function CustomsRoute(){
    return (
        <Routes>
            <Route path="/" element = {<ProductList/>}/>
            <Route path="/ProductDetails/:id" element= {<SingleProductDetails/>}/>
        </Routes>
    );
}
export default CustomsRoute;
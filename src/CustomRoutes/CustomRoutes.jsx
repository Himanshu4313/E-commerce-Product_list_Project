import { Route, Routes } from "react-router-dom";
import ProductList from "../Components/ProductList/ProductList";
import SingleProductDetails from "../Components/SingleProductDetailsPage/SingleProductDetails";
import AddtoCart from "../Components/AddtoCart/AddtoCart";

function CustomsRoute(){
    return (
        <Routes>
            <Route path="/" element = {<ProductList/>}/>
            <Route path="/ProductDetails/:id" element= {<SingleProductDetails/>}/>
            <Route path="/ProductCart" element ={<AddtoCart/>}/>

        </Routes>
    );
}
export default CustomsRoute;
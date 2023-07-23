
import {Route,Routes} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import ProductPage from "../pages/ProductPags";
import { Homepage } from "../pages/Homepage";
import { CartPage } from "../pages/Cart";
import AdminNavbar from "../pages/Admin/AdminNavbar";
import ProductList from "../pages/Admin/Productlist";
import EditProduct from "../pages/Admin/Producteditpage";
import AddData from "../pages/Admin/AddData";
{/* <AdminNavbar/>
    <ProductList/>
    <EditProduct/> */}

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/user/signUp" element={<SignUp/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes;
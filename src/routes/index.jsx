import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CheckoutPage from "../pages/CheckoutPage";
import MyLayout from "../components/layouts";
import CheckinPage from "../pages/CheckinPage";
import RegPage from "../pages/RegPage";

import ProductPage from "../pages/ProductPage";
import Cart from "../components/pages/cart/Cart";

import PaymentPage from "../pages/PaymentPage";
import ResultPage from "../pages/Result";

import Favorite from "../components/pages/favorite/Favorite";
import SearchPage from "../pages/SearchPage";
import CategoryPrd from "../components/component/Category";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<HomePage />} />
        <Route path="reg" element={<RegPage />} />
        <Route path="checkin" element={<CheckinPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path=":id" element={<ProductPage />} />
        <Route path="category-product/:slug" element={<CategoryPrd />} />
        <Route path="category-product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;

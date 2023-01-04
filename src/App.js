import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// Components

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// User components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// Protected User pages

import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";

// Protected Admin pages

import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>
        </Route>
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="admin/users" element={<AdminUsersPage />} />
          <Route path="admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="admin/products" element={<AdminProductsPage />} />
          <Route path="admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="admin/orders" element={<AdminOrdersPage />} />
          <Route path="admin/chats" element={<AdminChatsPage />} />
          <Route path="admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
        <Route path="*" element="Page not exists" />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

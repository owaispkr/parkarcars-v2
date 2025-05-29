import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "./../pages/AboutPage";
import HomePage from "./../pages/HomePage";
import ProductDetail from "./../pages/Product/ProductDetail";
import Listing from "./../pages/Product/Listing";
import ContactPage from "../pages/ContactPage";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import BlankLayout from "../layout/BlankLayout";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "../layout/ProtectedRoute";
import UploadCarPage from "../pages/Admin/Car/UploadCarPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BlankLayout />}>
      <Route element={<AuthenticationLayout />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/car-form"
          element={
            <ProtectedRoute>
              <UploadCarPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Route>
  )
);

export default router;

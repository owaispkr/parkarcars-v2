import {
  BrowserRouter,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <BrowserRouter>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/details/:id" element={<ProductDetail />} />
      </Route>
    </BrowserRouter>
  )
);

export default router;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/product-cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

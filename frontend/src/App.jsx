import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Login from "./pages/login";
import Register from "./pages/Register";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <>
            <CartProvider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </CartProvider>

    </>
  );
};

export default App;

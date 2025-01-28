import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
<<<<<<< HEAD
=======
import Categories from "./pages/Categories";
import Login from "./pages/login";
import Register from "./pages/Register";

>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
=======
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Categories" element={<Categories />} />
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
      </Routes>
    </>
  );
};

export default App;

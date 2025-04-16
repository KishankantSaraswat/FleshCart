import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaLeaf, FaFire, FaCarrot, FaBreadSlice, FaShoppingCart, FaCheck, FaArrowRight } from "react-icons/fa";
const products = [
  {
    id: 1,
    name: "Basmati Rice",
    description: "Premium Long Grain",
    price: 199,
    oldPrice: 249,
    icon: <FaLeaf className="text-6xl text-emerald-600" />,
    badge: "Best Seller",
    image: "/placeholder.svg?height=200&width=200",
    discount: "20% OFF",
    stock: 50
  },
  {
    id: 2,
    name: "Organic Turmeric",
    description: "Pure & Natural",
    price: 89,
    oldPrice: 129,
    icon: <FaFire className="text-6xl text-emerald-600" />,
    badge: "Organic",
    image: "/placeholder.svg?height=200&width=200",
    discount: "31% OFF",
    stock: 35
  },
  {
    id: 3,
    name: "Paneer Fresh",
    description: "Farm Fresh Daily",
    price: 149,
    oldPrice: 199,
    icon: <FaCarrot className="text-6xl text-emerald-600" />,
    badge: "Fresh",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Atta",
    description: "Chakki Fresh",
    price: 249,
    oldPrice: 299,
    icon: <FaBreadSlice className="text-6xl text-emerald-600" />,
    badge: "Premium",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const Bestsellers = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <section id="bestsellers" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-medium mb-2 block">Top Picks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Bestsellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular products, carefully selected based on customer favorites and seasonal freshness.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 mb-4 aspect-square flex items-center justify-center group">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {product.icon}
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-emerald-600 text-white text-sm px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-start">
                    <span className="text-emerald-600 font-bold text-xl">₹{product.price.toFixed(2)}</span>
                    <span className="text-gray-400 line-through text-sm">₹{product.oldPrice.toFixed(2)}</span>
                  </div>
                  <span className="text-sm text-gray-500">{product.stock} in stock</span>
                </div>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
                    ${addedToCart === product.id 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
                >
                  {addedToCart === product.id ? (
                    <>
                      <FaCheck className="text-lg" />
                      Added!
                    </>
                  ) : (
                    <>
                      <FaShoppingCart className="text-lg" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:gap-3"
          >
            View All Products
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers


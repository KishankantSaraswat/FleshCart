import React, { useState } from "react";
const products = [
  { id: 1, name: "Basmati Rice", price: 499, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 2, name: "Masoor Dal (Red Lentils)", price: 149, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 3, name: "Tur Dal (Pigeon Peas)", price: 179, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 4, name: "Atta (Wheat Flour)", price: 349, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 5, name: "Paneer (Indian Cottage Cheese)", price: 249, image: "/placeholder.svg?height=200&width=200", category: "Dairy" },
  { id: 6, name: "Coriander Powder", price: 79, image: "/placeholder.svg?height=200&width=200", category: "Spices" },
  { id: 7, name: "Chilli Powder", price: 89, image: "/placeholder.svg?height=200&width=200", category: "Spices" },
  { id: 8, name: "Garam Masala", price: 99, image: "/placeholder.svg?height=200&width=200", category: "Spices" },
  { id: 9, name: "Cumin Seeds", price: 129, image: "/placeholder.svg?height=200&width=200", category: "Spices" },
  { id: 10, name: "Mustard Seeds", price: 59, image: "/placeholder.svg?height=200&width=200", category: "Spices" },
  { id: 11, name: "Moong Dal (Green Gram)", price: 159, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 12, name: "Besan (Gram Flour)", price: 99, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 13, name: "Pickles (Mango)", price: 129, image: "/placeholder.svg?height=200&width=200", category: "Condiments" },
  { id: 14, name: "Pickles (Lemon)", price: 119, image: "/placeholder.svg?height=200&width=200", category: "Condiments" },
  { id: 15, name: "Naan Bread", price: 59, image: "/placeholder.svg?height=200&width=200", category: "Bakery" },
  { id: 16, name: "Papad (Lentil Wafers)", price: 79, image: "/placeholder.svg?height=200&width=200", category: "Snacks" },
  { id: 17, name: "Rava (Semolina)", price: 89, image: "/placeholder.svg?height=200&width=200", category: "Pantry" },
  { id: 18, name: "Ghee (Clarified Butter)", price: 499, image: "/placeholder.svg?height=200&width=200", category: "Dairy" },
  { id: 19, name: "Tea Leaves", price: 149, image: "/placeholder.svg?height=200&width=200", category: "Beverages" },
  { id: 20, name: "Jaggery", price: 99, image: "/placeholder.svg?height=200&width=200", category: "Pantry" }
];


const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shop Our Products</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 md:w-1/3"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-4 py-2 md:w-1/3"
        >
          <option value="">All Categories</option>
          <option value="Pantry">Pantry</option>
          <option value="Spices">Spices</option>
          <option value="Dairy">Dairy</option>
          <option value="Condiments">Condiments</option>
          <option value="Snacks">Snacks</option>
          <option value="Bakery">Bakery</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
            </div>
            <div className="p-4 pt-0">
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            1
          </a>
          <a
            href="#"
            className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            3
          </a>
          <a
            href="#"
            className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            4
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            5
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Shop;

// Product data for the FreshKart application
export const products = [
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

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return category 
    ? products.filter(product => product.category === category)
    : products;
};

// Helper function to search products
export const searchProducts = (term) => {
  const searchTerm = term.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const app = express();

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(express.json());

mongoose.connect('mongodb+srv://bhuvneshsharmacs22:IjgXiht3Q2FSOH3l@cluster0.163bs.mongodb.net/FreshCartDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const storesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Store image URL or Base64 string
  price: { type: Number, required: true }, // Added price field to schema
});

// Create Models
const User = mongoose.model('User', userSchema);
const Stores = mongoose.model('Stores', storesSchema, 'stores');

// Secret key for token generation
const SECRET_KEY = 'your-secret-key';

// Register Route (Create a new user)
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login Route (Authenticate user)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Middleware to authenticate the token (for protected routes)
const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.userId = decoded.userId; // Attach user ID to the request object
    next();
  });
};

// Stores CRUD Operations

// Create a new store
app.post('/stores', authenticate, async (req, res) => {
  const { name, description, image, price } = req.body;

  try {
    const newStore = new Stores({
      name,
      description,
      image,
      price,
    });
    await newStore.save();
    res.status(201).json({ message: 'Store created successfully', store: newStore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating store' });
  }
});

// Get all stores
app.get('/stores', async (req, res) => {
  try {
    const stores = await Stores.find();
    res.status(200).json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching stores' });
  }
});

// Get a single store by ID
app.get('/stores/:id', async (req, res) => {
  try {
    const store = await Stores.findById(req.params.id);
    if (!store) {
      return res.status(404).json({ message: 'Store not found' });
    }
    res.status(200).json(store);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching store' });
  }
});

// Delete a store
app.delete('/stores/:id', authenticate, async (req, res) => {
  try {
    const store = await Stores.findByIdAndDelete(req.params.id);
    if (!store) {
      return res.status(404).json({ message: 'Store not found' });
    }
    res.status(200).json({ message: 'Store deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting store' });
  }
});

// Server Listener
const PORT = 6409;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


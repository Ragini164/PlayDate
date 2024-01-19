const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Define the pet schema and model
const petSchema = new mongoose.Schema({
  petName: String,
  type: String,
  breed: String,
  age: Number,
  availabilityStatus: String,
  imageURL: String
});

const Pet = mongoose.model('Pet', petSchema);

// Define pet routes
const petRouter = express.Router();

petRouter.get('/available-pets', async (req, res) => {
  console.log('Attempting to fetch available pets...');
  try {
    const availablePets = await Pet.find({ availabilityStatus: 'Available' });
    console.log('Available pets:', availablePets);
    res.json(availablePets);
  } catch (err) {
    console.error('Error retrieving available pets:', err);
    res.status(500).json({ message: 'Error retrieving available pets' });
  }
});

// Log when the pet routes are accessed
console.log('Pet routes accessed!');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/PetScreen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Root path
app.get('/', (req, res) => {
  res.send('Pets API Home');
});

// Log when receiving a request to fetch available pets
app.use('/api/Pet/available-pets', (req, res, next) => {
  console.log('Received request to fetch available pets');
  next();
});

// Using pet routes
app.use('/api/Pet', petRouter);

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

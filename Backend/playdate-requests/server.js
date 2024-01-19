const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/PetRequests', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define the pet schema and model
const petSchema = new mongoose.Schema(
  {
    petName: String,
    type: String,
    breed: String,
    age: Number,
    availabilityStatus: String,
    imageURL: String
  },
  { collection: 'PlayDateRequests' }
);

const Pet = mongoose.model('Pet', petSchema);

// Define the routes
const router = express.Router();

router.get('/available-playdate-requests', async (req, res) => {
  console.log('Attempting to fetch available playdate request...');
  try {
    const availablePlayDate = await Pet.find({ availabilityStatus: 'Available' });
    console.log('Available PlayDate:', availablePlayDate);
    res.json(availablePlayDate);
  } catch (err) {
    console.error('Error retrieving available playdate:', err);
    res.status(500).json({ message: 'Error retrieving available playdates' });
  }
});

// Root endpoint
router.get('/', (req, res) => {
  res.send('Welcome to the PetRequests API!');
});

// Use the routes
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

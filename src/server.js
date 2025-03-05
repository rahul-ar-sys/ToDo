const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Use the todos routes
const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

app.listen(4000, () => console.log("API running on port 4000"));
const cors = require('cors');

// ✅ Add Middleware to Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // If you're using a frontend


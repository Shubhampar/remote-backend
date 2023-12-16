// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config(); // If using .env file for environment variables
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const mongoURI = process.env.MONGO_URL || "mongodb+srv://ishubhamsingh93:secure@cluster0.dy7xooi.mongodb.net/";
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// // Routes
// const authRoutes = require('./routes/auth');
// const developerRoutes = require('./routes/developer');
// const skillRoutes = require('./routes/skill');

// app.use('/api/auth', authRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/developer', developerRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { skillRouter } = require("./routes/skillRoutes");
const { clientRouter } = require("./routes/clientRoute");
const { developerRouter } = require("./routes/developerRoutes");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(cors());
app.use("/skills", skillRouter)
app.use("/developer", developerRouter)
app.use("/client", clientRouter)


app.get("/", (req, res)=>{
    res.send("<h1>Welcome to Remote Engine Backend</h1>")
})

app.listen(PORT, async ()=>{
      try {
          await connection;
          console.log(`Server is running at Port ${PORT}`);
          console.log("Connected to DB")
      } catch (error) {
          console.log(error)
      }
  })
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");

//Routes
const postsRoutes = require('./routes/api/posts');
const app = express();

//bodyParser middleWare
app.use(express.json())

//Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err));

//User routes
app.use('/api/posts', postsRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));

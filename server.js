const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL} = require('./config');

//routes
const postRoutes = require('./routes/api/posts');

const app = express();

//bodyParser middleware
app.use(express.json());

//connect to MOngo
mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

// User routes
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Welcome');
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('listening on port'));
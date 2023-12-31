const express = require('express');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require("./routes/auth.js");

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) =>{
    res.send("Hello, World");
})

app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`);
})

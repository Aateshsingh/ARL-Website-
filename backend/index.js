require('dotenv').config()
const express = require('express')
const {connectDB} = require('./db/connection')
const cors = require('cors')
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const joinRoutes = require('./routes/joinRoutes')
const app = express();

const PORT = process.env.PORT || 8000;
connectDB();

app.use(cors({
    origin: '*', 
    methods: 'GET, POST, PUT, DELETE', 
    allowedHeaders: 'Content-Type, Authorization' 
  }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())


//home route
app.get("/", (req,res)=>{
    return res.send("Server is UP and Running...")
});
app.use('/api/email', emailRoutes);
app.use('/api/joinus', joinRoutes);

app.listen(PORT, ()=>console.log("Server Started at PORT: ", PORT));
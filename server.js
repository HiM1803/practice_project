const express = require("express");
const connectDb = require("./config/dbconnect");
const errorHandler  = require("./middleware/errorHandler");
const cors = require("cors");

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 

app.get('/',(req,res)=>{
    res.send("working");
});

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
});

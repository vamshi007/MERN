require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')
const orderRoutes=require('./routes/order')
//DBConnect
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
//myroutes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api",categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',orderRoutes)

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

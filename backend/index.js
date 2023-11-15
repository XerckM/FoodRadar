const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
const dotenv = require('dotenv').config({path: "./vars/.env"});

const PORT = process.env.PORT || 4000;
const userRouter = require("./routes/userRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");

dbConnect();

const corsOptions = {
    origin: 'http://localhost:3000', // This should match the domain of your frontend application
    credentials: true, // This is important to allow sending and receiving cookies
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

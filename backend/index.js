const express = require('express');
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require('dotenv').config({path: "./vars/.env"});
const PORT = process.env.PORT || 4000;
const userRouter = require("./routes/userRoutes");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        mongoose.connection.once("open", () => {
            console.log("Connected to database");
        });
    } catch (error) {
        console.log("Database connection failed!!!");
    }
};

module.exports = dbConnect;
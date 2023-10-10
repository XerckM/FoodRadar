const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    location: {
        type: String,
        unique: true,
        index: true
    },
    hoursopen: {
        type: TimeRanges,
    },
    ratings: {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    },
}, { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Restaurant', restaurantSchema);
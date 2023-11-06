const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    pictures: [{
        type: String,
        required: true,
    }],
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        comment: String,
    }],
    menu: [{
        dishName: String,
        description: String,
        price: Number,
    }],
    reservations: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        numberOfPeople: Number,
        date: Date,
        time: String,
    }],
}, {
    timestamps: true,
});

// Indexing the location for geospatial queries
restaurantSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Restaurant', restaurantSchema);

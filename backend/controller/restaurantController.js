const Restaurant = require("../models/restaurantModel");
const asyncHandler = require("express-async-handler");

// Create a new restaurant
const createRestaurant = asyncHandler(async (req, res) => {
    const { name, location, menu } = req.body;
    const newRestaurant = new Restaurant({
        name,
        location,
        menu
    });

    const savedRestaurant = await newRestaurant.save();
    res.json(savedRestaurant);
});

// Get all restaurants
const getAllRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

// Get a specific restaurant by ID
const getRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});

// Update a restaurant
const updateRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        restaurant.name = req.body.name || restaurant.name;
        restaurant.location = req.body.location || restaurant.location;
        restaurant.menu = req.body.menu || restaurant.menu;
        restaurant.reviews = req.body.reviews || restaurant.reviews;

        const updatedRestaurant = await restaurant.save();
        res.json(updatedRestaurant);
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});

// Delete a restaurant
const deleteRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        await restaurant.remove();
        res.json({ message: "Restaurant removed" });
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});

// Add a review for a restaurant
const addReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;

    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        const alreadyReviewed = restaurant.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Restaurant already reviewed");
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };

        restaurant.reviews.push(review);

        restaurant.numReviews = restaurant.reviews.length;
        restaurant.rating =
            restaurant.reviews.reduce((acc, item) => item.rating + acc, 0) /
            restaurant.reviews.length;

        await restaurant.save();
        res.status(201).json({ message: "Review added" });
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});

// Make a reservation for a restaurant
const makeReservation = asyncHandler(async (req, res) => {
    const { date, time, numberOfPeople } = req.body;

    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        const reservation = {
            user: req.user._id,
            date,
            time,
            numberOfPeople,
        };

        restaurant.reservations.push(reservation);
        await restaurant.save();

        res.status(201).json({ message: "Reservation made" });
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant,
    addReview,
    makeReservation,
};

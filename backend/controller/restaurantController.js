const Restaurant = require("../models/restaurantModel");
const asyncHandler = require("express-async-handler");

const createRestaurant = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const findName = await Restaurant.findOne(name);
    if (!findName) {
        const newRestaurant = await Restaurant.create(req.body);
        res.json(newRestaurant);
    } else {
        throw new Error("Restaurant already exists");
    }
});

module.exports = { createRestaurant };
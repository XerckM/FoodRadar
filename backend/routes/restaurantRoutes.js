const express = require("express");
const {
    createRestaurant,
    getAllRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant,
    addReview,
    makeReservation
} = require("../controller/restaurantController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createRestaurant);
router.get("/all-restaurants", getAllRestaurants);
router.get("/:id", getRestaurant);
router.put("/edit-restaurant/:id", authMiddleware, isAdmin, updateRestaurant);
router.delete("/delete-restaurant/:id", authMiddleware, isAdmin, deleteRestaurant);
router.post("/:id/add-review", authMiddleware, addReview);
router.post("/:id/make-reservation", authMiddleware, makeReservation);

module.exports = router;

const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateId = require("../utils/validateId");


// Register A User
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else {
        throw new Error("User Already Exists")
    }
});

// Login A User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error("Invalid Credentials")
    }
});

// Update A User
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateId(_id);
    try {
        const updateUser = await User.findByIdAndUpdate(
            _id, 
            {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            }, 
            {
                new: true,
            }
        );
        res.json(updateUser);
    } catch (error) {
        throw new Error(error);
    }
});

// Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getAllUsers = await User.find();
        res.json(getAllUsers);
    } catch (error) {
        throw new Error(error)
    }
});

// Get A Single User
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
        const getUser = await User.findById(id);
        res.json({
            getUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Delete A User
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json({
            deleteUser,
            message: "User Successfully Deleted"
        });
    } catch (error) {
        throw new Error(error);
    }
});

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
        const block = await User.findByIdAndUpdate(
            id, 
            {
                isBlocked: true
            },
            {
                new: true
            }
        );
        res.json({
            message: "User Blocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
        const unblock = await User.findByIdAndUpdate(
            id, 
            {
                isBlocked: false
            },
            {
                new: true
            }
        );
        res.json({
            message: "User Unblocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { 
    createUser, 
    loginUser, 
    getAllUsers, 
    getUser, 
    deleteUser,
    updateUser,
    blockUser,
    unblockUser 
};
const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateId = require("../utils/validateId");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");




// Register A User
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
  });

// Login A User
const loginUser = asyncHandler(async (req, res) => {
    console.log('Login route hit')
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
        {
            refreshToken: refreshToken,
        },
        { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

// Handle Refresh Token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

// Logout

const logout = asyncHandler(async (req, res) => {
    console.log('Logout route hit');
    const cookie = req.cookies;
    console.log('Cookies:', cookie);
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        res.sendStatus(204);

    }
    await User.findOneAndUpdate({ refreshToken: refreshToken }, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    })
    res.sendStatus(204);
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

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatePassword = await user.save();
        res.json(updatePassword);
    } else {
        res.json(user);
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
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword
};
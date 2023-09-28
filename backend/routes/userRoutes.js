const express = require("express");
const { 
    createUser, 
    loginUser, 
    getAllUsers, 
    getUser, 
    deleteUser, 
    updateUser, 
    blockUser,
    unblockUser
} = require("../controller/userController");
const { authMiddleware, isAdmin, restrictTo } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get('/all-users', authMiddleware, isAdmin, getAllUsers)
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, restrictTo("admin"), blockUser);
router.put('/unblock-user/:id', authMiddleware, restrictTo("admin"), unblockUser);

module.exports = router;
const express = require("express");
const { 
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
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

router.get('/all-users', authMiddleware, isAdmin, getAllUsers)
router.get('/refresh', handleRefreshToken);
router.get("/logout", logout);
router.get('/:id', authMiddleware, isAdmin, getUser);

router.delete('/:id', deleteUser);

router.put('/edit-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
router.put('/password', authMiddleware, updatePassword)

module.exports = router;
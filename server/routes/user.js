const express = require("express");
const router = express.Router();

const {getAllUsers, createUser, updateUser, deleteUser} = require("../controllers/user.js");

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;

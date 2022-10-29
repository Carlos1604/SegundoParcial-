const express = require('express');

const {
    createUserData,
    getUserData,
    updateUserAddress,
    deleteUser
} = require("../controllers");

const router = express.Router();

router.post('/create-user-data/', createUserData);
router.get('/get-user-data/:id', getUserData);
router.put('/update-user-address/:id', updateUserAddress);
router.delete('/delete-user/:id', deleteUser);


module.exports = {
    router
}
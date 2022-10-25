const express = require('express');

const {
    createUserData,
    getUserData,
    updateUserAddress,
} = require("../controllers");

const router = express.Router();

router.post("/create-user-data/", createUserData);
router.get("/get-user-data/:id", getUserData);
router.put("/update-user-address", updateUserAddress);

module.exports = {
    router
}
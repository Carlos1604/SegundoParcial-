const fs = require('../firebase');
const {db} = fs;
let {userdata} =require ("/.data")
// CRUD
const createUserData = async (req, res) => {
    try {
        const {body: data} = req;
        const UserDb = require ("/.data")
        const {_path: {segments}} =  await UserDb.add(data);
        const id = segments[1];
        res.send({
            status: 200,
            id
        });
    } catch (error){
        res.send(error);
    }
};

const getUserData = async (req, res) => {
    try {
        const {params:{id}} = req;
        const UserDb = require ("/.data").doc(id);
        const response = await UserDb.get();
        const {_fieldsProto: {firstName, lastName, maidenName,age,address,city,coordinates,lat,long,postalCode,state,jobTitle}} = response;

        console.log(firstName, lastName, maidenName,age,address,city,coordinates,lat,long,postalCode,state,jobTitle);
       
        res.send({
            status: 200,
            firstName: firstName.stringValue,
            lastName: lastName.stringValue,
            maidenName: maidenName.stringValue,
            age: Number(rating.integerValue),
            address: address.stringValue,
            city: city.stringValue,
            coordinates: coordinates.stringValue,
            lat: Number(rating.integerValue || rating.doubleValue),
            long: Number(rating.integerValue || rating.doubleValue),
            postalCode: coordinates.stringValue,
            state: state.stringValue,
            jobTitle: jobTitle.stringValue,
            rating: Number(rating.integerValue || rating.doubleValue)
        });

    } catch (error) {
        res.send(error);
    }
};

const updateUserAddress = async (req, res) => {
    try {
        const {body: data} = req;
        const {id, time, author, name, rating} = data;
        const UserDb = require ("/.data").doc(id);
        await UserDb.update({
            address,city,coordinates,lat,long,postalCode,states
        });
       
        res.send({
            status: 200,
            id
        });

    } catch (error) {
        res.send(error);
    }
};



module.exports = {
    createUserData,
    getUserData,
    updateUserAddress,
}
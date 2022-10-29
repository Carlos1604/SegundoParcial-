
const {userData} =require ("../data.js")
// CRUD


const getUserData = async (req, res) => {
    try {
        const {params : { id }} = req;
        const objeto = userData.find(obj => obj.id == id);

        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        console.log(id)
        
        res.send({
            status: 200,
            user:{
                fullName: (`${userData[id].firstName} ${userData[id].lastName} ${userData[id].maidenName}`),
                email: userData[id].email,
                age: userData[id].age,
                address: userData[id].address,
                jobTitle: userData[id].company.title
            }
        })
        
    }catch(error){
        console.log(error)
        res.send({
            status:500,
            error});

    }
}

const updateUserAddress = async (req, res) => {
    try{
        const {params : { id }} = req;
        const {body: address} = req;
        const objeto = userData.find(obj => obj.id == id);
        userData[id-1].address = address;
        // const { }
        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }

        res.send({
            status: 200,
            user:{...userData[id-1]}
        })
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});

    }

};

const createUserData = async (req, res) => {
    try{
        const {body : { email }} = req;
        const newID = userData[userData.length-1].id +1;
        userData.push({"id":newID, email})
        res.send({
            status: 200,
            newID,
            email
        })
        console.log(userData)
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});

    }
}

const deleteUser = async (req, res) => {
    try {
        const {params : { id }} = req;
        const objeto = userData.find(obj => obj.id == id);

        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        userData.splice(id-1, 1);
        res.send({
            status: 200,
        })
        console.log(userData)
    }catch(error){
        res.send({
            status:500,
            error});

    }
}


module.exports = {
    createUserData,
    getUserData,
    updateUserAddress,
    deleteUser
}
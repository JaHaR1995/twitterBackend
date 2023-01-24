
const User = require("../models/User.model");

module.exports.usersController ={
    addUser: async(req, res)=>{
        try{
            const users = await User.create({
                name: req.body.name,
                save: []

            })
            res.json(users)
        } catch(error){
         res.json(error)
        }
    },
    

    getUser: async(req, res) =>{
        try{
            const users = await User.find().populate('save')
            res.json(users)
        } catch(error){
            res.json(error)
        }
    },

    editUserById: async(req, res) =>{
        try{
            const users = await User.findByIdAndUpdate(req.params.Id, {
                $push: {save: req.body.save}
            })
            res.json(users)
        } catch(error){
            res.json(error)
        }
    }
}
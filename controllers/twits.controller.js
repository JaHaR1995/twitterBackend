const Twit = require("../models/Twit.model");

module.exports.twitsController ={
    addTwit: async(req, res) =>{
    try {
        const twitter = await Twit.create({
            twit: req.body.twit,
            user: req.body.user,
            like: [],
        })
        res.json(twitter)
    } catch (error) {
        res.json(error)
    }
    },

    editTwitById: async(req, res) =>{
        try{
            const twitter = await  Twit.findByIdAndUpdate(req.params.Id,{
             $push: {like: req.body.like}
            }, {new: true})
            res.json(twitter)
        }catch(error){
            res.json(error)
        }
    },
 
    getTwit:async(req, res) =>{
        try{
            const twitter = await Twit.find(
                
            ).populate('like')
            res.json(twitter)
        } catch (error){
            res.json(error)
        }
    },

    deleteTwitById: async(req, res) =>{
        try{
            const twitter = await Twit.findByIdAndDelete(req.params.Id)
        } catch (error){
            res,json(error)
        }
    }
}
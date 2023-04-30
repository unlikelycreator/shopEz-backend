const {Task, Item} = require('../models/itemModels')

module.exports.getItem = async (req, res) =>{
    const item = await Item.find()
    res.send(item)
}

module.exports.saveItem = async (req, res) => {
    const {item} = req.body
     Item
     .create({item})
     .then((data) => { 
        console.log("Added Successfully..");
        console.log(data);
        res.send(data)
     })
}
/*
module.exports.updateTask = async (req,res) =>{
    const{_id, text} = req.body
    Task.findByIdAndUpdate(_id, { text, selectedItems }, { new: true })
    .then((updatedTask) => res.send(updatedTask))
    .catch((err) => console.log(err))
}*/

module.exports.deleteItem = async (req,res) =>{
    const{_id} = req.body
    Item
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}


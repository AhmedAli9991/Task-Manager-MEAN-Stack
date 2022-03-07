const Taskdoc=require("../Models/Tasks")

module.exports.Add= async (req,res)=>{
    try {
        const obj = {
            Title:req.body.Title,
            Desc:req.body.Desc,
            User:req.user._id
        }
        const task = await Taskdoc.create(obj) 
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.ViewAll= async (req,res)=>{
    try{    
        const task = await Taskdoc.find({User:req.user._id}) 
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.ViewOne= async (req,res)=>{
    try{    
        const task = await Taskdoc.findOne({_id:req.params.id}) 
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.delete= async (req,res)=>{
    try{    
        const task = await Taskdoc.deleteOne({_id:req.params.id}) 
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.update= async (req,res)=>{
    try{    
        const obj = {
            Title:req.body.Title,
            Desc:req.body.Desc,
            User:req.user._id
        }
        const task = await Taskdoc.findOneAndUpdate({ _id: req.params.id },obj)
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
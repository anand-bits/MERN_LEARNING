
const User= require('../models/userModel.js')

//Export the method using the exports----->
exports.home=(req,res)=>
{
    res.send("Hello")
}

exports.createUser= async(req,res)=>
{
    //extract info..........................>
    try{
        const {name,email}=req.body

       const user= await User.create({
            name,
            email
        })

        res.status(201).json({
            sucess:true,
            message:"User Created Successfully",
            user
        })

    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            sucess:false,
            message:"Failed"
        })
    }
}
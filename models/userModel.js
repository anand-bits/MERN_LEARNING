
const mongoose= require("mongoose")

const userSchema= new mongoose.Schema(
{
    name: {
        type:String,
        require:[true,'Name is Required'],
        trim:true,
        maxLength:[20,'Name must be less than 20']
    },
    email:{
        type:String,
        required:[true,'Email is Required'],
        unique:true
    }
    
}
)
// Exported The schema 
module.exports=mongoose.model("User",userSchema)
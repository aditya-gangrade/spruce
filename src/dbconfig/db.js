import mongoose from "mongoose";
const dbconnection  = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/spruce'); 
            console.log("dbconnected")
    }
    catch(error){
        console.log(error)
    }
}
export default dbconnection; 
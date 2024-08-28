import mongoose from "mongoose";
const dbconnection  = async ()=>{
    try {
        await mongoose.connect(''); 
            console.log("dbconnected")
    }
    catch(error){
        console.log(error)
    }
}
export default dbconnection; 
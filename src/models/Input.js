import mongoose from "mongoose";
const InputSchema = new mongoose.Schema({
    input :String,
})
const Input = mongoose.models.Input || mongoose.model('Input', InputSchema); 
export default Input; 
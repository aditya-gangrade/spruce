import mongoose from "mongoose";

const InputSchema = new mongoose.Schema({
  input: { type: String, required: true },
  verificationCode: { type: String, required: true },
});

const Input = mongoose.models.Input || mongoose.model('Input', InputSchema);

export default Input;

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import JsonWebToken from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minlength: [3, "First name must be at least 3 characters required"],
    },
    lastname: {
      type: String,
      require: true,
      minlength: [3, "Last name must be at least 3 characters required"],
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

// userSchema.method.generateAuthToken = () => {
//   const token = JsonWebToken.sign({ id: this._id }, process.env.SECRET_KEY, {
//     expiresIn: "1h",
//   });
//   return token;
// };

// userSchema.static.hashpassword = async (password) => {
//   return await bcrypt.hash(password, 10);
// };


// userSchema.method.comparePassword = async (password) => {
//   return await bcrypt.compare(password, this.password);
// };


const userModel = mongoose.model("user", userSchema);

export default userModel;

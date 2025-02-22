import mongoose from "mongoose";

const dbConnect = async (db_string,db_name) => {
  try {
    await mongoose.connect(db_string + db_name);
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
  }
};
export default dbConnect;

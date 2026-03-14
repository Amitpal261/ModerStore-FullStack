import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb+srv://amitpal336900_db_user:ZY3QhXLAipa1qO8f@mycluster.fuqvr5j.mongodb.net/")

        console.log("MongoDB Connected")

    } catch (error) {

        console.log("MongoDB Error:", error.message)

        process.exit(1)
    }
}

export default connectDB
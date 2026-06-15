import mongoose from "mongoose";
import { DBNAME } from "../constant.js";

const connectDB = async() => {
    try {
        const connectionInstance =
            await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)

            console.log(`✅ Database ${DBNAME} is connected , ${connectionInstance.connection.host}`);
    }
catch(error){
        console.log("Error in DB connection", error);
        process.exit(1)
    }
}

export default connectDB;   
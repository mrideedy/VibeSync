import { mongoose } from "mongoose";


const connectToMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongo")
    } catch(error){
        console.log("Error connecting for mongo", error.message);
    }
};

export default connectToMongoDB;
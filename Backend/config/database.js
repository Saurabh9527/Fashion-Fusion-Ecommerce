
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: ".env"
})

const mongoURL = process.env.MONGO_URL
//mongoose.connect(mongoURL);
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
});

const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("Database connected");
})

db.on('disconnected' , ()=>{
    console.log("Database disconnected");
})

db.on('error' , (err)=>{
    console.log("MongoDb connection error" , err);
})

export default db;
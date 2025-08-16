import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectdb = async () => {
    try {
        const dbconnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });
        console.log(`MONGODB CONNECTED,DB HOST : ${dbconnection.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); 
    }
}
export default connectdb;
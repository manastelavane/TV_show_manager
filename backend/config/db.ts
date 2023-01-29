import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectionOptions);
        console.log("Database is connected");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;
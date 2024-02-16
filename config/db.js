import mongoose, { connect } from 'mongoose';

const ConnectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected: ${(await conn).connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB
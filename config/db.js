const { default: mongoose } = require('mongoose');

const ConnectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        const conn = mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected: ${(await conn).connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;
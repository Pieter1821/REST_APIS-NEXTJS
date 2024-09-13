import mongoose from 'mongoose';

const url = process.env.MONGODB_URI as string;

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * Logs the connection status and handles errors.
 */
const connect = async () => {
    const { readyState } = mongoose.connection;
    if (readyState === 1) {
        console.log('Already connected to database');
        return;
    }
    if (readyState === 2) {
        console.log('Connecting to database');
        return;
    }

    try {
        await mongoose.connect(url, { dbName: 'next14restapi', bufferCommands: true });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw new Error('Error connecting to database');
    }
};

export default connect;
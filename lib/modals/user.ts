import { timeStamp } from 'console';
import { Model, Schema, model, models } from 'mongoose';
import { use } from 'react';

/**
 * @typedef {Object} UserSchema
 * @property {string} email - The user's email address. This field is required, unique, converted to lowercase, and trimmed of whitespace.
 * @property {string} username - The user's username. This field is required, unique, converted to lowercase, and trimmed of whitespace.
 * @property {string} password - The user's password. This field is required.
 * @property {Date} createdAt - The timestamp when the user was created.
 * @property {Date} updatedAt - The timestamp when the user was last updated.
 */
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    }, { timestamps: true });
    
    const User = models.User || model('User', UserSchema);

export default User;
  


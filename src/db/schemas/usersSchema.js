import mongoose from 'mongoose';
const { Schema } = mongoose;

export const usersSchema = new Schema({
    full_name: {type: String, required: true},
    unit: {type: String, required: true},
    email: {type: String, required: true},
    phone_number: {type: String, required: true},
    emergency_number: {type: String, required: false},
    user_type: {type: String, required: true},
    password: {type: String, required: true}
})
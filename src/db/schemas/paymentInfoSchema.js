import mongoose from 'mongoose';
const { Schema } = mongoose;

export const paymentInfoSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
})
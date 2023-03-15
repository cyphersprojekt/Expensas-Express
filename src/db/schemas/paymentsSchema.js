import mongoose from 'mongoose';
const { Schema } = mongoose;

export const paymentsSchema = new Schema({
    unit: {type: String, required: true},
    date: {type: Date, required: true, default: new Date()},
    amount: {type: Number, required: true, default: 0},
    confirmed: {type: Boolean, required: true, default: false}
})
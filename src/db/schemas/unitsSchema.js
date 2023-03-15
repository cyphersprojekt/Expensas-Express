import mongoose from 'mongoose';
const { Schema } = mongoose;

export const unitsSchema = new Schema({
    unit: {type: String, required: true},
    current_tenant: {type: String, required: true},
    owner: {type: String, required: true},
    expenses_share: {type: Number, required: true},
    square_meters: {type: Number, required: true},
    balance: {type: Number, required: true, default: 0},
    last_payment: {type: Date, required: true}
})
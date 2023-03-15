import mongoose from 'mongoose';
const { Schema } = mongoose;

export const subLiquidationsSchema = new Schema({
    date: {type: Date, required: true},
    expenses: {type: Array, required: true},
    unit: {type: String, required: true},
    total: {type: Number, required: true},
    total_unit: {type: Number, required: true},
    general_expense: {type: String, required: true}
})
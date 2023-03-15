import mongoose from 'mongoose';
const { Schema } = mongoose;

export const liquidationsSchema = new Schema({
    date: {type: Date, required: true},
    expenses: {type: Array, required: true},
    total: {type: Number, required: true}
})
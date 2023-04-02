import mongoose from 'mongoose';
const { Schema } = mongoose;

export const buildingInfoSchema = new Schema({
    address: {type: String, required: true},
    admin_phone_number: {type: String, required: true},
    building_phone_number: {type: String, required: false},
    floors: {type: Number, required: true},
    apartments: {type: Number, required: true},
    finished_setup: {type: Boolean, required: true}
})
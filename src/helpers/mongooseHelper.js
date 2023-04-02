import mongoose from 'mongoose'
import dbHelperFactory from './dbHelperFactory.js'

export default class mongooseHelper extends dbHelperFactory {
    constructor(name, schema) {
        super()
        mongoose.connect(process.env.MONGOURL) 
        this.model = mongoose.model(name, schema)
    }
    async getAll(){
        return await this.model.find().lean()
    }

    async getById(id){
        let data = await this.model.findById(id).lean()
        if (data) {
            return data
        }
        else {
            return null
        }
    }

    async save(data){
        let saved = await this.model.create(data)
        return saved
    }

    async deleteById(id){
        await this.model.deleteOne({_id: id})
        return id
    }
    // Te parece poner un metodo para dropear una coleccion entera loquito?
    async deleteAll(){
        throw Error("Method not implmented")
    }

    async updateById(id, newData){
        await this.model.updateOne({_id: id,}, newData)
    }

    // Metodos funcionales pero quiza no necesarios
    /* async updateOne(identifier, newData){
        await this.model.updateOne(identifier, newData)
    } */
    /* async getLast() {
        let data = await this.model.find().sort({_id: -1}).limit(1).lean()
        if (data.length === 0) {
            return null
        }
        else {
            return data[0]
        }
    } */
}
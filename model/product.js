import mongoose, { ObjectId } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: 'category'
    }
}, {timestamps: true});
export default mongoose.model('Product', ProductSchema)
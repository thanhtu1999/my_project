import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: String,
    type: String,
    status: String,
    quantity: BigInt,
    images: [String],
    detail: String,
    hot: String,
    discount: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ProductMessage = mongoose.model('ProductMessage', ProductSchema);

export default ProductMessage;
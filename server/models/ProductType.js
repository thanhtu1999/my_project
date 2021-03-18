import mongoose from 'mongoose';

const ProductTypeSchema = mongoose.Schema({
    name: String,
    status: String,
    detail: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ProductTypeMessage = mongoose.model('ProductTypeMessage', ProductTypeSchema);

export default ProductTypeMessage;
import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    user: String,
    address: String,
    details: [String],
    status: String,
    payment: String,
    account: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const OrderMessage = mongoose.model('OrderMessage', OrderSchema);

export default OrderMessage;
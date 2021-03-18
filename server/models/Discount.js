import mongoose from 'mongoose';

const DiscountSchema = mongoose.Schema({
    name: String,
    code: String,
    discount: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const DiscountMessage = mongoose.model('DiscountMessage', DiscountSchema);

export default DiscountMessage;Discount
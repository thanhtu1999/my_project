import mongoose from 'mongoose';

const AccountSchema = mongoose.Schema({
    email: String,
    name: String,
    type: String,
    status: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const AccountMessage = mongoose.model('AccountMessage', AccountSchema);

export default AccountMessage;
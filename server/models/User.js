import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: String,
    sex: String,
    address: [String],
    email: String,
    password: String,
    phonenumber: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const UserMessage = mongoose.model('UserMessage', UserSchema);

export default UserMessage;User
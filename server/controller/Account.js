import AccountMessage from '../models/Account';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

export const getAccount = async (req, res) => {
    try {
        const AccountMessages = await AccountMessage.find();
        
        res.status(200).json(AccountMessages);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

export const createAccount = async (req, res) => {
    const Account = req.body;

    const newAccount = new AccountMessage(Account);

    try {
        await newAccount.save();

        res.status(201).json(newAccount);
    } catch (error) {
        res.status(409).json({message: error.message });
    }
}

export const updateAccount = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Account with that id");

    const updatedAccount = await AccountMessage.findByIdAndUpdate(_id, Account, { new: true });
   
    res.json(updatedAccount);
}

export const deleteAccount = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Account with that id");

    await AccountMessage.findByIdAndRemove(_id);

    res.json({ message: 'Account deleted successfully'});
}

export const signinAccount = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAccount = await AccountMessage.findOne({ email });

        if(!existingAccount) return res.status(404).json({ message: "Account doesn't exist."});
        
        const isPasswordCorrect = await bcrypt.compare(password,existingAccount.password);

        if(!isPasswordCorrect) return res.status(404).json({ message: "Invalid credentials."});

        const token = jwt.sign({ email:existingAccount.email, id:existingAccount._id }, 'test', { expiresIn: "1h" });
    
        res.status(200).json({ result:existingAccount, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}
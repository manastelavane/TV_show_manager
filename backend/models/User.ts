import { Request } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUserRequest extends Request {
    user?: any
}

export interface IUser extends mongoose.Document {

    email: string,
    password: string,
    token?: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(entredPassword: string): Promise<boolean> 

}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },

    password: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});

UserSchema.pre("save", async function(next) {

    const user = this as IUser;

    if(!user.isModified("password")) return next();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    next();

})

UserSchema.methods.comparePassword = function(entredPassword: string) {
    const user = this as IUser;
    return bcrypt.compareSync(entredPassword, user.password);
}

const User = mongoose.model<IUser>("User1", UserSchema);

export default User;
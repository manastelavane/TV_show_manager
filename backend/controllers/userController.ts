import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User";
import generateToken from "../utils/generateToken";

// @Desc Register user
// @Route /api/users/register
// @Method POST
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password} = req.body;

  const user = new User({
    email,
    password,
  });

  await user.save();

  const options = {
    expires: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  const token=generateToken(user._id)
  res.status(201).cookie("token", token, options).json({
      id: user._id,
      email: user.email,
      token: token
  });
});


// @Desc Login user
// @Route /api/users/login
// @Method POST
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })

  if(!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if(await user.comparePassword(password)) {
    const token=generateToken(user._id)
    const options = {
      expires: new Date(
        Date.now() + 5 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.status(201).cookie("token", token, options).json({
      id: user._id,
      email: user.email,
      token: token
    });

  } else {
    res.status(401);
    throw new Error("Email or password incorrect");
  }

})

import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Tvshow from '../models/Tvshow';
import { IUserRequest } from '../models/User';


// @Desc new Tvshow
// @Route /api/Tvshows
// @Method POST
export const newTvshow = asyncHandler(async (req: IUserRequest, res: Response) => {

    const { title,streamingApp,rating,review } = req.body;

    const tvshow = await Tvshow.create({
        user: req.user._id,
        title,
        streamingApp,
        rating,
        review
    });


    res.status(201).json(tvshow);

})

// @Desc Update Tvshow
// @Route /api/Tvshows/:id
// @Method PUT
export const updateTvshow = asyncHandler(async (req: IUserRequest, res: Response) => {
    let tvshow = await Tvshow.findById(req.params.id);

    if(!tvshow) {
        res.status(401);
        throw new Error("SHOW not found");
    }

    tvshow = await Tvshow.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json(tvshow);

})


// @Desc Get all Tvshows current user
// @Route /api/Tvshows/me
// @Method GET
export const myTvshow = asyncHandler(async (req: IUserRequest, res: Response) => {
    const tvshow = await Tvshow.find({ user: req.user._id });
    if(!tvshow) {
        res.status(401);
        throw new Error("Tvshows not found");
    }

    res.status(201).json(tvshow);

})



// @Desc Delete Tvshow 
// @Route /api/Tvshows/:id
// @Method DELETE
export const deleteTvshow = asyncHandler(async (req: Request, res: Response) => {

    const tvshow = await Tvshow.findById(req.params.id);
    const id=req.params.id;
    if(!tvshow) {
        res.status(401);
        throw new Error("Tvshow not found");
    }

    await Tvshow.findByIdAndDelete(req.params.id);

    res.status(201).json({id});

})
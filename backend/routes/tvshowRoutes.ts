import express from 'express';
import { newTvshow,updateTvshow, myTvshow, deleteTvshow } from '../controllers/tvshowController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.route("/").post(protect, newTvshow)
router.route("/me").get(protect, myTvshow);
router.route("/:id").put(protect,updateTvshow).delete(protect,deleteTvshow)


export default router;
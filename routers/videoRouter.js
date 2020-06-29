import express from "express";
import routes from "../routes";
import {
  videos,
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  getEditVideo,
  postEditVideo,
} from "../controller/videoController";
import { userDetail } from "../controller/userController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);
videoRouter.get(routes.upload, onlyPrivate, getUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;

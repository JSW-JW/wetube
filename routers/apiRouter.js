import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  subscribe,
  deleteComment,
} from "../controller/videoController";
import { bringLogin } from "../controller/userController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.subscribe, subscribe);
apiRouter.post(routes.deleteComment, deleteComment);
apiRouter.post(routes.bringLogin, bringLogin);

export default apiRouter;

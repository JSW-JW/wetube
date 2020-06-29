import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  subscribe,
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.subscribe, subscribe);

export default apiRouter;

import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from "./post.controller.js";

import { getUsers } from "./user.controller.js";

export const postRoute = () => {
  const router = Router();

  router.post("/posts", createPost);

  router.get("/posts", getPosts);

  router.get("/posts/:id", getPost);

  router.put("/posts/:id", updatePost);

  router.delete("/posts/:id", deletePost);

  router.get("/users", getUsers);

  return router;
};

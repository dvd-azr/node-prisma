import express from "express";
import { prismaClient } from "./database.js";
import { postRoute } from "./post.route.js";

const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "4500");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  return res.json({ status: "OK", code: 200 });
});

app.use("/", postRoute());

app.listen(PORT, async () => {
  await prismaClient.$connect();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});

import express  from "express";
import prisma from "./modules/db";
import CORS from "cors";
import router from "./router";
import { errorBoundary } from "./modules/errorBoundary";

const app = express();

app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
    res.send("Hello World!");
})

app.use('/perguntas', router);

app.use(errorBoundary)

export default app;
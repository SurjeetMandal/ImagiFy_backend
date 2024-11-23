import express from "express";
import { generateImg } from "../controllers/imageController.js";
import userAuth from "../middlewares/auth.js";



const imageRouter =  express.Router()

imageRouter.post('/generate_img', userAuth, generateImg);


export default imageRouter;
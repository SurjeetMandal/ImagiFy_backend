import express from "express";
import {registeredUser, loginUser, userCredit} from "../controllers/userController.js"
import userAuth from "../middlewares/auth.js";


const userRouter = express.Router()

userRouter.post("/register", registeredUser)
userRouter.post("/login", loginUser)
userRouter.get("/credits", userAuth, userCredit)

export default userRouter;

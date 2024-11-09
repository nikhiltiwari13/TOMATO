import express from "express"
import { addToCart, removeFromCart, getData } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.post("/get", authMiddleware, getData)

export default cartRouter
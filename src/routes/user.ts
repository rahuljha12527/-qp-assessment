import express from "express";
const router = express.Router();

import { viewGroceryItems,bookGroceryItems} from "../controller/user"

router.get('/viewGroceryItems', viewGroceryItems);
router.post("/bookGroceryItems",bookGroceryItems);

export default router;

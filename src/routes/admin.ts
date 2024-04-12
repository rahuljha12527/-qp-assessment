import express from "express";
const router = express.Router();

import { addGroceryItem,removeGroceryItem ,updateGroceryItem,manageInventory} from "../controller/admin";

router.post('/addGroceryItem', addGroceryItem);

router.delete("/removeGroceryItem/:id",removeGroceryItem);

router.put("/updateGroceryItem/:id",updateGroceryItem)
// Define other routes here

router.patch("/manageInventory/:id",manageInventory)

export default router;

import { Request, Response } from "express";
import { GroceryItem } from "../entity/GroceryItem";
import { getRepository } from "typeorm";
import { AppDataSource } from "../../data-source";

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, price, inventory } = req.body;

    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);

    const newItem = new GroceryItem();
    newItem.name = name;
    newItem.price = price;
    newItem.inventory = inventory;

    await groceryItemRepository.save(newItem);

    res.status(200).json({ message: "Grocery Item added successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add grocery item', error: error.message });
  }
};
export const removeGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Assuming you send the ID of the item to remove as a URL parameter

    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);
    
    // Find the item by ID
    const itemToRemove = await groceryItemRepository.findOne({ where: { id } });
    
    if (!itemToRemove) {
      return res.status(404).json({ message: "Grocery Item not found" });
    }

    await groceryItemRepository.remove(itemToRemove); // Remove the item from the database

    res.status(200).json({ message: "Grocery Item removed successfully" });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove grocery item', error: error.message });
  }
};


export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Assuming you send the ID of the item to update as a URL parameter
    const { name, price, inventory } = req.body;

    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);
    
    let itemToUpdate = await groceryItemRepository.findOne({where:{id}}); // Find the item by ID
    
    if (!itemToUpdate) {
      return res.status(404).json({ message: "Grocery Item not found" });
    }

    // Update the item properties if new values are provided in the request body
    if (name) itemToUpdate.name = name;
    if (price) itemToUpdate.price = price;
    if (inventory) itemToUpdate.inventory = inventory;

    await groceryItemRepository.save(itemToUpdate); // Save the updated item to the database

    res.status(200).json({ message: "Grocery Item updated successfully", item: itemToUpdate });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update grocery item', error: error.message });
  }
};

export const manageInventory = async (req: Request, res: Response) => {
  try {
    // Parse the item ID from the request parameters
    const id = parseInt(req.params.id);
    
    // Extract the new inventory level from the request body
    const { inventory } = req.body;

    // Use TypeORM to find the grocery item by its ID
    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);
    const itemToUpdate = await groceryItemRepository.findOne({where:{id}});

    // If the item is not found, return a 404 response
    if (!itemToUpdate) {
      return res.status(404).json({ message: "Grocery item not found" });
    }

    // Update the inventory level of the found item
    itemToUpdate.inventory = inventory;

    // Save the updated item to the database
    await groceryItemRepository.save(itemToUpdate);

    // Return a JSON response indicating success
    res.status(200).json({ message: "Inventory managed successfully", item: itemToUpdate });
  } catch (error) {
    // If an error occurs, return a 500 response with the error message
    res.status(500).json({ message: 'Failed to manage inventory', error: error.message });
  }
};



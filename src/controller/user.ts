import { Request, Response } from 'express';
import { GroceryItem } from '../entity/GroceryItem';
import { AppDataSource } from '../../data-source';

// Retrieve and display available grocery items
export const viewGroceryItems = async (req: Request, res: Response) => {
  try {
    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);
    const groceryItems = await groceryItemRepository.find();
    res.status(200).json({ groceryItems });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve grocery items', error: error.message });
  }
};
// Allow users to book multiple grocery items
export const bookGroceryItems = async (req: Request, res: Response) => {
  try {
    // Extract the list of grocery items to book from the request body
    const { items } = req.body;

    // Get the repository for the GroceryItem entity from AppDataSource
    const groceryItemRepository = AppDataSource.getRepository(GroceryItem);

    // Assuming 'items' is an array of item IDs, you can implement the booking logic here
    // For example, update the status of the items in the database, create orders, etc.

    // Here, we simply respond with a success message
    res.status(200).json({ message: 'Grocery items booked successfully' });
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ message: 'Failed to book grocery items', error: error.message });
  }
};

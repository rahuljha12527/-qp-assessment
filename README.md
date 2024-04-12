

---

# Grocery Booking API

This project is a Grocery Booking API built with TypeORM, allowing administrators to manage grocery items and users to view and book available items.

## Setup Instructions

To run this project locally, follow these steps:

1. **Install Dependencies**: Run the following command to install project dependencies:

    ```
    npm install
    ```

2. **Database Configuration**: Configure the database settings inside the `data-source.ts` file. Ensure you provide the correct database credentials and connection details.

3. **Compile TypeScript**: Compile the TypeScript files using the following command:

    ```
    tsc --noEmit
    ```

4. **Run the Server**: Start the server by running the following command:

    ```
    node --no-warnings=ExperimentalWarning --loader ts-node/esm ./src/index.ts
    ```

5. **API Endpoints**: Once the server is running, you can access the following API endpoints:

    - **Admin Endpoints**:
        - `POST //api/admin/addGroceryItem`: Add a new grocery item to the system.
        - `GET /api/user/viewGroceryItems`: View existing grocery items.
        - `PUT /api/admin/updateGroceryItem/:id`: Update details (e.g., name, price) of an existing grocery item by ID.
        - `DELETE /api/admin/removeGroceryItem/:id`: Remove a grocery item from the system by ID.
        - `POST /api/admin/manageInventory/:id`: Manage inventory levels of a grocery item by ID.

    - **User Endpoints**:
        - `GET /api/user/viewGroceryItems`: View the list of available grocery items.
        - `POST /api/user/bookGroceryItems`: Book multiple grocery items in a single order.

## API Usage

### Admin Endpoints

#### Add a New Grocery Item

- **Endpoint**: `POST /api/admin/addGroceryItem`
- **Request Body**:
    ```json
    {
        "name": "Milk",
        "price": 2.5,
        "inventory": 100
    }
    ```
- **Response**:
    ```json
    {
        "message": "Grocery Item added successfully",
        "item": {
            "id": 1,
            "name": "Milk",
            "price": 2.5,
            "inventory": 100
        }
    }
    ```

#### View Existing Grocery Items

...

### User Endpoints

#### View Available Grocery Items

- **Endpoint**: `GET /api/user/viewGroceryItems`
- **Response**:
    ```json
    {
        "groceryItems": [
            {
                "id": 1,
                "name": "Milk",
                "price": 2.5,
                "inventory": 100
            },
            {
                "id": 2,
                "name": "Bread",
                "price": 1.5,
                "inventory": 50
            }
        ]
    }
    ```

#### Book Multiple Grocery Items

- **Endpoint**: `POST /api/user/bookGroceryItems`
- **Request Body**:
    ```json
    {
        "items": [1, 2]
    }
    ```
- **Response**:
    ```json
    {
        "message": "Grocery items booked successfully"
    }
    ```

---


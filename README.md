Sure! Let's complete the API endpoints and the user endpoints in the README file.

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
        - `POST /admin/add`: Add a new grocery item to the system.
        - `GET /admin/view`: View existing grocery items.
        - `PUT /admin/update/:id`: Update details (e.g., name, price) of an existing grocery item by ID.
        - `DELETE /admin/remove/:id`: Remove a grocery item from the system by ID.
        - `POST /admin/manage-inventory/:id`: Manage inventory levels of a grocery item by ID.

    - **User Endpoints**:
        - `GET /user/view`: View the list of available grocery items.
        - `POST /user/book`: Book multiple grocery items in a single order.

## API Usage

### Admin Endpoints

#### Add a New Grocery Item

- **Endpoint**: `POST /admin/add`
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

- **Endpoint**: `GET /user/view`
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

- **Endpoint**: `POST /user/book`
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

Feel free to modify or expand this README file as needed for your project documentation.
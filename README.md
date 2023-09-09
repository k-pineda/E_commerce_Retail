# E-Commerce Backend with Express.js and Sequelize

This is the backend for an e-commerce site built using Express.js API and configured to interact with a MySQL database using Sequelize. The primary motivation for this project was to gain a deep understanding of the fundamental architecture of e-commerce sites and learn how to handle HTTP requests while interacting with a MySQL database through Express.js API routes.

## Installation

To set up and run this project on your local machine, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/k-pineda/E_commerce_Retail.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.

   ```bash
   cd E_commerce_Retail
   npm install
   ```

3. **Create .env File**: Create a `.env` file in the root directory of the project and configure your MySQL database settings as follows:

   ```env
   DB_NAME='ecommerce_db'
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   ```

4. **Start MySQL Server**: Ensure that your MySQL server is running. You can use tools like MAMP or XAMPP to manage your MySQL server.

5. **Create Database Schema**: Use MySQL Workbench or a similar tool to login with your MySQL user and password. Then, run the `schema.sql` script found in the `db` folder to create the necessary database schema.

6. **Seed the Database**: After creating the database schema, go back to your terminal and run the following command to seed the database with sample data:

   ```bash
   npm run seed
   ```

7. **Start the Server**: Finally, start the Express.js server by running:

   ```bash
   node server.js
   ```

8. **Testing the API**: You can use a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the backend functionality. Import the provided API endpoints collection and test the CRUD operations on categories, products, and tags.

## Usage

This project provides API routes to perform all CRUD (Create, Read, Update, Delete) HTTP requests on categories, products, and tags for an e-commerce site. You can use tools like Insomnia or Postman to interact with the API and test its functionality.

For a detailed walkthrough of setting up and using this backend, please refer to the provided video walkthrough.

Happy coding!
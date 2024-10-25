import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import { ProductManager } from "./productManager";
import { Product } from "./products";

console.log("Welcome to the Product Management System App");

const pm = new ProductManager();

const products: Product[] = JSON.parse(fs.readFileSync('product.json', 'utf-8'));


// const products: Product[] = [
//     {
//         id: 1,
//         name: "Smartphone X1",
//         category: "Electronics",
//         price: 799.99,
//         rating: 4.5,
//         reviewscount: 250,
//         brand: "Brand A",
//         availability: "In Stock",
//         color: "Black",
//         storage: "128GB",
//         releaseDate: "2023-03-15"
//     },
//     {
//         id: 2,
//         name: "Laptop Pro 15",
//         category: "Computers",
//         price: 1299.99,
//         rating: 4.8,
//         reviewscount: 150,
//         brand: "Brand B",
//         availability: "In Stock",
//         color: "Silver",
//         storage: "512GB",
//         releaseDate: "2022-11-10"
//     },
//     {
//         id: 3,
//         name: "Wireless Headphones",
//         category: "Audio",
//         price: 199.99,
//         rating: 4.2,
//         reviewscount: 300,
//         brand: "Brand C",
//         availability: "Out of Stock",
//         releaseDate: "2021-07-22"
//     },
//     {
//         id: 4,
//         name: "Smartwatch Z",
//         category: "Wearables",
//         price: 249.99,
//         rating: 4.0,
//         reviewscount: 120,
//         brand: "Brand D",
//         availability: "In Stock",
//         color: "Rose Gold",
//         releaseDate: "2023-05-05"
//     },
//     {
//         id: 5,
//         name: "4K Ultra HD TV",
//         category: "Home Appliances",
//         price: 1499.99,
//         rating: 4.7,
//         reviewscount: 80,
//         brand: "Brand E",
//         availability: "In Stock",
//         color: "Black",
//         releaseDate: "2022-01-15"
//     }
// ];

products.forEach(product => pm.addProduct(product));

let exit = false;

while (!exit) {
    console.log("\nMenu:");
    console.log("1. List all products");
    console.log("2. Add a new product");
    console.log("3. Remove a product");
    console.log("4. Update a product");
    console.log("5. Find a product by ID");
    console.log("6. Exit");

    const choice = readlineSync.question("Choose an option (1-6): ");

    switch (choice) {
        case '1':
            console.log("All Products:", pm.listProducts());
            break;

        case '2':
            const id = parseInt(readlineSync.question('Enter product ID: '));
            const name = readlineSync.question('Enter product name: ');
            const category = readlineSync.question('Enter product category: ');
            const price = parseFloat(readlineSync.question('Enter product price: '));
            const rating = parseFloat(readlineSync.question('Enter product rating: '));
            const reviewscount = parseInt(readlineSync.question('Enter product reviews count: '));
            const brand = readlineSync.question('Enter product brand: ');
            const availability = readlineSync.question('Enter product availability (true/false): ').toLowerCase() === 'true';
            const releaseDate = readlineSync.question('Enter product release date (YYYY-MM-DD): ');

            const newprod: Product = { id, name, category, price, rating, reviewscount, brand, availability, releaseDate };
            pm.addProduct(newprod);
            pm.saveProductsToFile();
            console.log("Product added successfully.");
            break;

        case '3':
            const removeId = parseInt(readlineSync.question('Enter product ID to remove: '));
            pm.removeProduct(removeId);
            pm.saveProductsToFile();
            console.log(`Product with ID ${removeId} removed successfully.`);
            break;

        case '4':
            const updateId = parseInt(readlineSync.question('Enter product ID to update: '));
            const updates: Partial<Product> = {};
            const updatePrice = readlineSync.question('Enter new price (leave blank to skip): ');
            if (updatePrice) updates.price = parseFloat(updatePrice);
            const updateRating = readlineSync.question('Enter new rating (leave blank to skip): ');
            if (updateRating) updates.rating = parseFloat(updateRating);
            const updateReviewCount = readlineSync.question('Enter new review count (leave blank to skip): ');
            if (updateReviewCount) updates.reviewscount = parseInt(updateReviewCount);
            const updateavail = readlineSync.question('Enter new availability (leave blank to skip): ');
            if (updateavail) updates.availability = parseFloat(updateavail);

            pm.updateProduct(updateId, updates);
            pm.saveProductsToFile();
            console.log(`Product with ID ${updateId} updated successfully.`);
            break;

        case '5':
            const findId = parseInt(readlineSync.question('Enter product ID to find: '));
            const product = pm.findById(findId);
            if (product) {
                console.log('Product details:', product);
            } else {
                console.log(`Product with ID ${findId} not found.`);
            }
            break;

        case '6':
            exit = true;
            console.log("Exiting the Product Management System. Goodbye!");
            break;

        default:
            console.log("Invalid option, please choose again.");
    }
}

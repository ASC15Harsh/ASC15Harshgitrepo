console.log("Welcome to Product Management system App");

import { ProductManager } from "./productManager";
import { Product } from "./products";
import * as readlineSync from 'readline-sync';

const pm = new ProductManager();

const products: Product[] = [
    {
        id: 1,
        name: "Smartphone X1",
        category: "Electronics",
        price: 799.99,
        rating: 4.5,
        reviewscount: 250,
        brand: "Brand A",
        availability: "In Stock",
        color: "Black",
        storage: "128GB",
        releaseDate: "2023-03-15"
    },
    {
        id: 2,
        name: "Laptop Pro 15",
        category: "Computers",
        price: 1299.99,
        rating: 4.8,
        reviewscount: 150,
        brand: "Brand B",
        availability: "In Stock",
        color: "Silver",
        storage: "512GB",
        releaseDate: "2022-11-10"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Audio",
        price: 199.99,
        rating: 4.2,
        reviewscount: 300,
        brand: "Brand C",
        availability: "Out of Stock",
        releaseDate: "2021-07-22"
    },
    {
        id: 4,
        name: "Smartwatch Z",
        category: "Wearables",
        price: 249.99,
        rating: 4.0,
        reviewscount: 120,
        brand: "Brand D",
        availability: "In Stock",
        color: "Rose Gold",
        releaseDate: "2023-05-05"
    },
    {
        id: 5,
        name: "4K Ultra HD TV",
        category: "Home Appliances",
        price: 1499.99,
        rating: 4.7,
        reviewscount: 80,
        brand: "Brand E",
        availability: "In Stock",
        color: "Black",
        releaseDate: "2022-01-15"
    }
];

products.forEach(product => pm.addProduct(product));

console.log("All Products:", pm.listProducts());

pm.removeProduct(1);
pm.removeProduct(3);

console.log("Products after removal:", pm.listProducts());

let np6: Product = {
    id: 6,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 79.99,
    rating: 4.6,
    reviewscount: 200,
    brand: "Brand F",
    availability: "In Stock",
    color: "Black",
    releaseDate: "2023-08-01"
};

pm.addProduct(np6);

console.log("All Products after adding id : 6:", pm.listProducts());

pm.updateProduct(6, { price : 89.99});

console.log("All Products after updating price of id 6 is :", pm.listProducts());

const id = readlineSync.question('Enter product ID: ');
const name = readlineSync.question('Enter product name: ');
const category = readlineSync.question('Enter product category: ');
const price = parseFloat(readlineSync.question('Enter product price: '));
const rating = parseFloat(readlineSync.question('Enter product rating: '));
const reviewscount = parseInt(readlineSync.question('Enter product reviews count: '));
const brand = readlineSync.question('Enter product brand: ');
const availability = readlineSync.question('Enter product availability (true/false): ').toLowerCase() === 'true';
const releaseDate = readlineSync.question('Enter product release date (YYYY-MM-DD): ');

const newprod: Product = { id: parseInt(id), name, category, price, rating, reviewscount, brand, availability, releaseDate };

pm.addProduct(newprod);
console.log("All Products after adding new product is", pm.listProducts());
const findproductbyid = parseInt(readlineSync.question('Enter product ID to find the product: '));
console.log('Product details are:', pm.findById(findproductbyid));
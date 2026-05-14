# E-Commerce Shopping Cart

The Shopping Cart module is a Node.js-based application used to manage products, cart operations, discounts, and payments in an E-commerce project.

This project demonstrates:
- Shopping cart functionality
- Product handling
- Discount calculation
- Payment processing
- Modular programming in Node.js

---

# Project Structure

ShoppingCart/
│
├── app.js
├── cart.js
├── discount.js
├── payment.js
├── product.js
├── package.json
└── README.md

---

# Files Description

## 1. app.js
Main entry point of the application.

### Responsibilities
- Starts the application
- Connects all modules
- Controls application flow

---

## 2. cart.js
Handles shopping cart operations.

### Features
- Add products to cart
- Remove products from cart
- Display cart items
- Calculate total bill

---

## 3. discount.js
Handles discount calculations.

### Features
- Apply discounts
- Calculate final amount
- Reduce total price

---

## 4. payment.js
Handles payment-related operations.

### Features
- Process payment
- Display payment status
- Calculate payable amount

---

## 5. product.js
Handles product details.

### Features
- Store product information
- Display products
- Manage product data

---

# Technologies Used

- JavaScript
- Node.js

---

# Prerequisites

Before running the project, install:

## 1. Install Node.js

Download and install Node.js from:

https://nodejs.org

---

# Installation Steps

## Step 1: Open Terminal

Open terminal inside the ShoppingCart folder.

---

## Step 2: Move to Project Folder

```bash
cd ShoppingCart
```

---

## Step 3: Initialize Node.js Project

```bash
npm init -y
```

This command creates:
- package.json

---

# Installing Packages

This project mainly uses Node.js built-in features.

Optional package installation:

## Install Nodemon (Optional)

```bash
npm install nodemon --save-dev
```

Purpose:
- Automatically restarts application after file changes

---

# Running the Project

## Run using Node

```bash
node app.js
```

---

## Run using Nodemon

```bash
npx nodemon app.js
```

---

# Features

- Product management
- Shopping cart operations
- Discount calculation
- Payment processing
- Total bill calculation

---

# Example Workflow

1. Start application
2. Add products
3. Add items to cart
4. Apply discount
5. Process payment
6. Display final bill



# Author

Manitrisha

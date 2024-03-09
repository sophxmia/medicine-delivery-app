# Medicine Delivery App

This web application allows users to order medicines for delivery from various drug stores.
## Overview

The Medicine Delivery app offers three complexity levels: base, middle, and advanced.
Description

The Medicine Delivery app consists of two main pages:

* Shops Page: Where users can choose a drug store and add medicines to their cart.
* Shopping Cart Page: Where users can review their added products, modify quantities, add contact information, and submit their order.

## Requirements

* Instructions: Detailed instructions on how to run the application are provided in this readme file.
* Source Code: The source code is uploaded to GitHub. Find the link below.
* Application Hosting: The application is hosted using Netlify. Access the URL provided below.
* Frontend: Developed using JavaScript (React.js framework) with a customizable design style.
* Backend: Implemented in NodeJS.
* Database: Utilizes a relational or non-relational database (MySQL).

## Base Level

### Drug Stores Page:

* Users can select a drug store and add medicines to their cart (data fetched from the database).

### Shopping Cart Page:

* Users can view all added products, remove items, adjust quantities, and provide contact details.
* Orders are saved in the database upon submission.

## Middle Level

### Drug Stores Page:

* Includes all features from the base level.
* Ability to sort medicines by price and/or date added.
* Users can mark medicines as favorites, which are prioritized in sorting.

### Shopping Cart Page:

* Retains cart items in local storage.

## Advanced Level

### Drug Stores Page:

* Includes all features from the middle level.

### Shopping Cart Page:

* Includes all features from the middle level.
* Integration of Google Maps:
  * Users can select their address via a map pin or manually enter it.
  * Displays the selected shop on the map.
  * (Extra) Provides route and estimated time from shop to user's address.
  * (Extra) Implements a captcha for order creation.

## Additional Ideas

* Orders History Page: Users can track their orders using email, phone number, or order ID.
* Coupons Page: Displays available coupons for discounts, which users can apply during checkout.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: npm install.
4. Start the application: npm start.

## GitHub Repository

Link to GitHub Repository
https://github.com/sophxmia/medicine-delivery-app 
## Application URL

Link to hosted application on Netlify
https://medicine-delivery-app-react.netlify.app/ 

Feel free to explore and contribute to the project! If you encounter any issues or have suggestions for improvement, please create a GitHub issue.

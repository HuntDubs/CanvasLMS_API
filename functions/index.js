const functions = require("firebase-functions");
// const faker = require('faker');

// const products = [];

// const LIMIT = 100;

// for (let i = 0; i < LIMIT;  i++){
//     products.push({
//         name: faker.commerce.productName(),
//         price: faker.commerce.price(),
//     });
// }

exports.listProducts = functions.https.onCall((data, context) => {
  return {
    api_key: "123456789",
    password: "SuperSoup",
  };
});

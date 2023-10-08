const Shopify = require("shopify-api-node");
require("dotenv").config();

const shopify = new Shopify({
    shopName: process.env.STORE_NAME,
    // apiKey: process.env.API_KEY,
    // password: process.env.API_SEC_KEY,
    accessToken: process.env.API_ACCESS_TOKEN
});

module.exports = shopify;
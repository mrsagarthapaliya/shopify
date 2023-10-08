const router = require("express").Router()

const getAllProductsData = require("../../controllers/shopifyControllers/fetchShopifyData/getAllProductsData")
const saveOrUpdateShopifyDatabase = require("../../controllers/saveOrUpdateDatabase/saveOrUpdateShopifyDatabase")

router.get("/getAllProducts", getAllProductsData) //fetch all products in store
    .get("/:id") //get product by id
    .post("/saveOrUpdate", saveOrUpdateShopifyDatabase) //save or update product data

module.exports = router
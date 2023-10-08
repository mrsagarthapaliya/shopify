const shopifyProductsList = require("../../../helper/shopifyHelper/getShopifyData/getShopifyProducVariants")

const getAllProducts = async (req, res) => {
    try {
        const productsList = await shopifyProductsList()
        return productsList

    } catch (error) {
        console.error("Error fetching products", error)
    }
}

module.exports = getAllProducts

const shopify = require("../../../utils/shopifyAdminAPIAccess")

const getShopifyProductVariants = async () => {
    const shopifyProductsList = await shopify.product.list()
    return shopifyProductsList
}

module.exports = getShopifyProductVariants
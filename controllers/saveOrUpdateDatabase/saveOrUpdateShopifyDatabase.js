// const { getShop } = require("../../helper/shopifyHelper/getShop")
const getShopifyProducts = require("../../helper/shopifyHelper/getShopifyData/getShopifyProducVariants")
const saveOrUpdateCollection = require("../../services/shopify/saveOrUpdateShopifyCollectionDatabase")
const saveOrUpdateProduct = require("../../services/shopify/saveOrUpdateShopifyProductAtDatabase")
const saveOrUpdateProductVariant = require("../../services/shopify/saveOrUpdateShopifyProductVariantDatabase")

const saveOrUpdateShopifyDatabase = async (req, res) => {
    try {
        const productList = await getShopifyProducts()
        // const ShopData = await getShop()

        await saveOrUpdateProduct(productList)
        await saveOrUpdateProductVariant(productList)
        await saveOrUpdateCollection()
        res.json({
            message: "Adding/Updating product, variant and collection database is successful"
        })
    } catch (error) {
        res.json({ message: error })
        console.log(error)
    }
}

module.exports = saveOrUpdateShopifyDatabase
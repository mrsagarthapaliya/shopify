const { getShopifyCollection } = require("../../../helper/shopifyHelper/getShopifyData/getShopifyCollection")

const getAllCollections = async (req, res) => {
    try {
        const collectionList = await getShopifyCollection()
        return collectionList

    } catch (error) {
        console.error("Error fetching products", error)
    }
}

module.exports = getAllCollections

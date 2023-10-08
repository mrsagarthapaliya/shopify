const shopify = require("../../../utils/shopifyAdminAPIAccess")

const GetShopifyCollection = async () => {
    let collectionList = []

    const customCollecitonList = await shopify.customCollection.list()
    for (const collection of customCollecitonList) {
        collection.collectionType = "custom" 
        collectionList.push(collection)
    }

    const smartCollecitonList = await shopify.smartCollection.list()
    for (const collection of smartCollecitonList) {
        collection.collectionType = "smart"
        collectionList.push(collection)
    }

    return collectionList
}

const GetProductIds = async (collectionId) => {
    const products = await shopify.collection.products(collectionId);

    const productIds = [];
    for (const product of products) {
        productIds.push(product.id);
    }
    return productIds;
};

module.exports = { GetShopifyCollection, GetProductIds }
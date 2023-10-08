const { GetProductIds } = require("../getShopifyData/getShopifyCollection");
const { getShop } = require("../getShop");

const createCollectionPayload = async (shopifyCollection) => {
    const { id, title, handle, collectionType } =
        shopifyCollection

    const { ShopId } = await getShop()
    const productIds = await GetProductIds(id)
    const productsCount = productIds.length
    console.log("productCount: " + typeof(productsCount))

    const collectionPayload = {
        _id: id,
        ShopId: 12345, //test shopId
        handle,
        title,
        productsCount,
        collectionType,
        productIds
    };

    return collectionPayload;
};

module.exports = { createCollectionPayload };

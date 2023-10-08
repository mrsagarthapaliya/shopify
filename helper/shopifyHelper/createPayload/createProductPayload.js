const { getShop } = require("../getShop");

const createProductPayload = async (shopifyProduct) => {
    const {
        id,
        title,
        handle,
        body_html,
        vendor,
        product_type,
        tags,
        image,
        images,
        variants,
        created_at,
        updated_at,
        published_at,
        templete_suffix,
        published_scope,
        options,
        metafields
    } = shopifyProduct

    // console.log(shopifyProduct)

    const { ShopId } = await getShop()

    const productPayload = {
        _id: id,
        ShopId: 12345, // test shopId
        title,
        handle,
        created_at,
        updated_at,
        body_html,
        vendor,
        product_type,
        tags,
        image,
        images,
        variants: variants.map(variant => variant.id),
        published_at,
        templete_suffix,
        published_scope,
        options,
        metafields
    }

    // console.log(productPayload);

    return productPayload
};

module.exports = createProductPayload
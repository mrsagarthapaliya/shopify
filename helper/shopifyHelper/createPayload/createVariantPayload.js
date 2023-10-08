// const { getShop } = require("../getShop");

const createVariantPayload = async (shopifyVariant) => {

    const {
        id,
        product_id,
        title,
        price,
        sku,
        position,
        inventory_policy,
        compare_at_price,
        fulfillment_service,
        inventory_management,
        option1,
        option2,
        option3,
        created_at,
        updated_at,
        taxable,
        barcode,
        grams,
        image_id,
        weight,
        weight_unit,
        inventory_item_id,
        inventory_quantity,
        old_inventory_quantity } = shopifyVariant

    // const { ShopId } = await getShop()

    const variantPayload = {
        _id: id,
        shop_id: 12345, // test shopId
        product_id,
        title,
        price: parseFloat(price),
        sku,
        position,
        inventory_policy,
        compare_at_price,
        fulfillment_service,
        inventory_management,
        option1,
        option2,
        option3,
        created_at,
        updated_at,
        taxable,
        barcode,
        grams,
        image_id,
        weight,
        weight_unit,
        inventory_item_id,
        inventory_quantity,
        old_inventory_quantity,
        parent: product_id
    }

    console.log(variantPayload)
    return variantPayload;
}

module.exports = createVariantPayload

const mongoose = require("mongoose")

const variantSchema = mongoose.Schema({
    _id: Number,
    shopId: { type: Number, index: true },
    product_id: Number,
    title: String,
    price: Number,
    sku: { type: String, index: true },
    position: Number,
    inventory_policy: String,
    compare_at_price: Number,
    fulfillment_service: String,
    inventory_management: String,
    option1: String,
    option2: String,
    option3: String,
    created_at: Date,
    updated_at: Date,
    taxable: Boolean,
    barcode: String,
    grams: Number,
    image_id: String,
    weight: Number,
    weight_unit: String,
    inventory_item_id: Number,
    inventory_quantity: Number,
    old_inventory_quantity: Number,
    parent: {
        type: Number,
        ref: 'Products'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("productVariant", variantSchema)
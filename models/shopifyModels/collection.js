const { Schema, model } = require("mongoose");

const collectionSchema = new Schema(
    {
        _id: Number,
        shopId: { type: Number },
        handle: String,
        title: String,
        productIds: [Number],
        productsCount: Number,
        collectionType: String,
    },
    { timestamps: true, usePushEach: true }
);

const Collections = model("Collections", collectionSchema);

module.exports = { Collections };
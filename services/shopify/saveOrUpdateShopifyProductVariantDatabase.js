const variant = require("../../models/shopifyModels/variant")
const createVariantPayload = require("../../helper/shopifyHelper/createPayload/createVariantPayload")

const saveOrUpdateProductVariant = async (productList) => {

    let variantData = []

    for await (const data of productList) {
        for (const variants of data.variants) {
            variantData.push(variants)
        }
    }

    const variantPayloadData = await Promise.all(variantData.map(createVariantPayload))

    for await (const payload of variantPayloadData) {
        const findVariant = await variant.findOne({ _id: payload._id })

        if (!findVariant) {
            await variant.create(payload)
        } else {
            await variant.updateOne(
                { _id: payload._id },
                payload,
                { new: true },
                { runValidators: true }
            )
        }
    }
}

module.exports = saveOrUpdateProductVariant
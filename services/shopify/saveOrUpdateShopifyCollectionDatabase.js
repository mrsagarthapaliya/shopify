const { Collections } = require("../../models/shopifyModels/collection")
const { createCollectionPayload } = require("../../helper/shopifyHelper/createPayload/createCollectionPayload")
const { GetShopifyCollection } = require("../../helper/shopifyHelper/getShopifyData/getShopifyCollection")

const saveOrUpdateCollection = async () => {

    const collectionData = await GetShopifyCollection()

    const collectionPayloadData = await Promise.all(
        collectionData.map(createCollectionPayload)
    )

    for (const payload of collectionPayloadData) {
        const findCollection = await Collections.findOne({ _id: payload._id })

        if (!findCollection) {
            await Collections.create(payload)
        } else {
            await Collections.updateOne(
                { _id: payload._id },
                payload,
                { new: true },
                { runValidators: true },
                { upsert: true }
            )
        }
    }
}

module.exports = saveOrUpdateCollection
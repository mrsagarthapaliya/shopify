const { createSalesChannelPayload } = require("../../helper/shopifyHelper/createPayload/createSalesChannelPayload")
const salesChannel = require("../../models/shopifyModels/salesChannel")


const updateSalesChannel = async (req, res) => {
    try {
        const {
            merchantId,
            merchantName,
            fileUpdateInterval,
            fileUploadInterval,
            ftpUrl,
            ftpUserName,
            ftpPassword,
            ftpPort,
            shopId
        } = req.body

        const salesChannelPayload = await createSalesChannelPayload({
            merchantId,
            merchantName,
            fileUpdateInterval,
            fileUploadInterval,
            ftpUrl,
            ftpUserName,
            ftpPassword,
            ftpPort,
            shopId
        })

        const updatedData = await salesChannel.updateOne(
            {
                shopId
            },
            salesChannelPayload
        )

        res.json({ message: "sales Channel updated", data: updatedData })

    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

module.exports = { updateSalesChannel }
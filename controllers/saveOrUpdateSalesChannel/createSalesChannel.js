const { createSalesChannelPayload } = require("../../helper/shopifyHelper/createPayload/createSalesChannelPayload")
const salesChannel = require("../../models/shopifyModels/salesChannel")
const user = require("../../models/shopifyModels/user")


const createSalesChannel = async (req, res) => {
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

        const findSalesChannel = await salesChannel.findOne({shopId})

        if (!findSalesChannel) {
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

            const createdData = await salesChannel.create(salesChannelPayload)

            await user.updateOne(
                {
                    shopId
                },
                {
                    salesChannelId: createdData._id
                },
                { new: true },
                { runValidators: true }
            )

            return res.json({ message: "sales Channel created", data: createdData })
        }

        return res.json({ message: "merchant already exists" })

    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

module.exports = { createSalesChannel }
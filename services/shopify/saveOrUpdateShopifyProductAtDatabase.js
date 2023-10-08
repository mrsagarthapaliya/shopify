const { DateTime } = require("luxon")

const product = require("../../models/shopifyModels/product")
const createProductPayload = require("../../helper/shopifyHelper/createPayload/createProductPayload");
const { getShop } = require("../../helper/shopifyHelper/getShop");

const saveOrUpdateProduct = async (productList) => {

    try {
        const { TimeZone } = await getShop()
        const currentDate = DateTime.now().setZone(TimeZone)
        const twentyFourHoursAgo = (currentDate.minus({ hours: 24})).toISO()

        const productPayloadData = await Promise.all(
            productList.map(createProductPayload)
        )

        console.log(productPayloadData)

        for (const payload of productPayloadData) {
            
            const findProduct = await product.findOne({ _id: payload._id })

            if (!findProduct) {
                await product.create(payload)
                
            } else if (payload.updatedAtShopify > twentyFourHoursAgo) {
                await product.updateOne(
                    {
                        _id: payload._id,
                    },
                    payload,
                    { new: true },
                    { runValidators: true }
                )
            }
        }
    } catch (error) {
        throw error
    }
}


module.exports = saveOrUpdateProduct
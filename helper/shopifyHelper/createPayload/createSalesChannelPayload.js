const createSalesChannelPayload = async (salesChannelData) => {

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
    } = salesChannelData

    const salesChannelPayload = {
        merchantId,
        merchantName,
        fileUpdateInterval,
        fileUploadInterval,
        ftpUrl,
        ftpUserName,
        ftpPassword,
        ftpPort,
        shopId
    }

    return salesChannelPayload
}

module.exports = { createSalesChannelPayload }
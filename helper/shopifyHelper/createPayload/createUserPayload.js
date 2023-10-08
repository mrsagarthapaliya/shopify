const { getShop } = require("../getShop")

const createUserPayload = async () => {

    const { ShopId, ShopName, ShopDomain } = await getShop()

    const userPayload = {
        shopId: ShopId,
        shopName: ShopName,
        shopUrl: ShopDomain,
        domain: ShopDomain
    }

    return userPayload
}

module.exports = { createUserPayload }
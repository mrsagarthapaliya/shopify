const shopify = require("../../utils/shopifyAdminAPIAccess");

const getShop = async () => {
  const shop = await shopify.shop.get()

  const ShopId = shop.id
  const ShopName = shop.name
  const ShopDomain = shop.domain
  const TimeZone = shop.iana_timezone

  return {
    ShopId,
    ShopName,
    ShopDomain,
    TimeZone
  }
}

module.exports = { getShop }
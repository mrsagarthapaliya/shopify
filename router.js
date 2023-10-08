const router = require("express").Router()

const productApi = require("./routes/shopifyRoutes/productRoutes")
const userApi = require("./routes/shopifyRoutes/userRoutes")

router.use('/product', productApi)
router.use('/user', userApi)

module.exports = router
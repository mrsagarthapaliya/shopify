const user = require("../../models/shopifyModels/user")

const getUser = async (req, res) => {
    try {
        const { shopId } = req.body

        const findUser = await user.findOne({ shopId: shopId }).populate("salesChannelId")

        if (findUser) {
            return res.json(findUser)
        }

        return res.json({
            message: "something went wrong!"
        })

    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

module.exports = { getUser }
const { createUserPayload } = require("../../helper/shopifyHelper/createPayload/createUserPayload")
const user = require("../../models/shopifyModels/user")


const addOrUpdateUser = async (req, res) => {
    try {
        const userPayload = await createUserPayload()

        const findUser = await user.findOne({ shopId: userPayload.shopId })

        if (findUser) {
            const updateUser = await user.updateOne(
                {
                    shopId: userPayload.shopId
                },
                userPayload
            )
            return res.json({ message: "user updated", data: updateUser })
        } else {
            const createUser = await user.create(userPayload)
            return res.json({ message: "user created successfully", data: createUser})
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

module.exports = { addOrUpdateUser }
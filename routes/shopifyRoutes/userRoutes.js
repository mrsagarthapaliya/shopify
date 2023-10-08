const { createSalesChannel } = require("../../controllers/saveOrUpdateSalesChannel/createSalesChannel")
const { updateSalesChannel } = require("../../controllers/saveOrUpdateSalesChannel/updateSalesChannel")
const { addOrUpdateUser } = require("../../controllers/saveOrUpdateUser/addOrUpdateUser")
const { getUser } = require("../../controllers/saveOrUpdateUser/getUser")

const router = require("express").Router()

router.get("/getUser", getUser) //fetch user detail
    .post("/addUser", addOrUpdateUser) //add new user detail
    .post("/createSalesChannel", createSalesChannel) // create sales channel
    .patch("/updateSalesChannel", updateSalesChannel) // update sales channel

module.exports = router
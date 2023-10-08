const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    shopId: {
        type: Number,
        require: true,
        unique: true,
    },
    shopUrl: {
        type: String,
        require: true,
        unique: true
    },
    shopName: {
        type: String,
        require: true
    },
    domain: {
        type: String
    },
    salesChannelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "salesChannel"
    }
}, { timestamps: true, userPushEach: true })

module.exports = mongoose.model("user", userSchema)
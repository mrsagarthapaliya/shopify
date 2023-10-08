const mongoose = require("mongoose")

const salesChannelSchema = mongoose.Schema({
    merchantId: {
        type: Number,
        require: true,
        unique: true
    },
    merchantName: {
        type: String,
        require: true,
    },
    fileUpdateInterval: {
        type: Number
    },
    fileUploadInterval: {
        type: Number
    },
    ftpUrl: {
        type: String
    },
    ftpUserName: {
        type: String
    },
    ftpPassword: {
        type: String
    },
    ftpPort: {
        type: Number
    },
    shopId: {
        type: Number,
        ref: "user"
    }
}, { timestamp: true }
)

module.exports = mongoose.model("salesChannel", salesChannelSchema)
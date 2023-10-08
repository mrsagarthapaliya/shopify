const mongoose = require("mongoose")

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(console.log("connected to database ....."))
        .catch((err) =>{
            console.log(err)
        })
}

module.exports = dbConnect
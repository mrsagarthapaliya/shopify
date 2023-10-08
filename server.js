const app = require("./app")
const dbConnect = require("./config/dbConnect")

const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 5000

dbConnect()

app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`)
})
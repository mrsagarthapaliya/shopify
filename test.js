const { DateTime } = require("luxon");
const { getShop } = require("./helper/shopifyHelper/getShop");

const date = async () => {
    const { TimeZone } = await getShop()
    console.log(TimeZone)
    
    const currentDate = DateTime.now().setZone(TimeZone);
    console.log("now date: ", new Date())

    const twentyFourHoursAgo = (currentDate.minus({ hours: 24 })).toISO()
    console.log(twentyFourHoursAgo)
}

date()
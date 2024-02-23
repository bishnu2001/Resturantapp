const mongoose=require('mongoose');

const database=async()=>{
    try {
       const database=await mongoose.connect(process.env.MONGO_URL)
       console.log(database.connection.host)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = { database }
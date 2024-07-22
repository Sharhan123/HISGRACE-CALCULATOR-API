const app = require('./index')
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)

const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open',()=>{
    console.log("db connected");
})
app.listen(process.env.PORT,()=>{
    console.log('server running on 4000');
}) 
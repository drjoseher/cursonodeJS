const mongoose = require('mongoose')

mongoose.connect(process.env.BBDD_URL, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => {
    console.log('connected to mongo on localhost')
})

// tamirMegged
// 7fsuEHbiJ6fQto1m
// heroku config:set MONGODB_URI="mongodb+srv://tamirMegged:7fsuEHbiJ6fQto1m@cluster0.o2ex7.mongodb.net/trident?retryWrites=true&w=majority"
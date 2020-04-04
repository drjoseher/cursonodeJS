const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

console.log()
const city = process.argv[2]

if (city === undefined){
    return console.log("Introduce a String")
}

geocode(city, (error, { latitude, longitude, location }) => {
    if (error){
        return console.log('Error', error )
    }
    
    console.log('Data: ', latitude, longitude, location)
    
    forecast(latitude, longitude, (error, response) => {
        if (error){
            return console.log('Error', error )
        }
        console.log(location)
        console.log('Data: ', response)
    })

})
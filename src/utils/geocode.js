const request = require('request')
const geocode = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a3517e042a1cfd21d5deeb5e8fc9824f&query='+location
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.location)
        }
    })
}

module.exports = geocode
const request = require('request');
var getWeather = (latt,long,callback) => {
request({
    url:`https://api.darksky.net/forecast/5b947a78ecc9a09e3e6d818e3b532414/${latt},${long}`,
    json:true
},(error, response, body) => {
    if(!error&& response.statusCode === 200){
callback(undefined,{
   temperature:body.currently.temperature ,
   what_It_Feels_Like:body.currently.apparentTemperature
})
    } else{
        callback('Unable to fetch weather');
    }

});
}

module.exports.getWeather = getWeather;
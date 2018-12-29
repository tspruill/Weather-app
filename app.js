const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options(
{
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string:true
    }
}).help().argv;


geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.addresss);
        latt = results.latitude;
        long = results.longitude;
       
        
        weather.getWeather(latt,long, (errorMessage,weatherResults) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(`The current tempature is:${weatherResults.temperature}`);
        console.log(`It feels like: ${weatherResults.what_It_Feels_Like}`);
    }
});

    }
});


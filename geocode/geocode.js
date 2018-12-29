
const request = require('request');


var geocodeAddress = (userAddress,callback) => {

var encodedAddress = encodeURI(userAddress);
request({
    url:`http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
},(error, response, body) => {
    if(error){
        callback("unable to connect with Google.");
 
    }else if(body.status === 'ZERO_RESULTS'){
        callback("unable to find address");
    }else if (body.status === 'OK'){
        callback(undefined, {
            addresss:body.results[0].formatted_address,
            longitude:body.results[0].geometry.location.lng,
            latitude:body.results[0].geometry.location.lat
            
        });
    
    }
});
    
};
    
    
    
    
module.exports.geocodeAddress = geocodeAddress;
    
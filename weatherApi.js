'use strict'

var http = require('http'),
    _ = require('lodash');

exports.getCurrentWeather = function(callback) {
    var url = 'http://yle.fi/saa/resources/ajax/saa-api/current-weather.action?ids=658225,643492,633679,634963,638936,650224,655194,632978,640999,648900,655808,632453,660158';
    console.log(url);
    var data = '';
    http.get(url, function(response) {
        response.on('data', function(chunk) {
            data += chunk;
        });
        response.on('end', function() {
            data = JSON.parse(data);
            callback({}, reMap(data));
        });
    }).on("error", function(err) {
        console.log("Got error: " + err.message);
        callback(err, {});
    });
}

function reMap(data) {
    return _.map(data, function(weather) {
        return {
            location: weather.locationName,
            temperature: weather.temperature,
            description: weather.weatherSymbol
        }
    });
}

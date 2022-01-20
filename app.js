const travel = document.getElementById('direction');
const submit = document.getElementById('submit');
let travelDirection;

const cityID = 2654710;

travelDirection = travel.value;

function weatherBalloon( postCode ) {
    var key = '36b033476dd5cea0c38cb227411b005f';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + postCode + ',gb&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}


function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    var description = d.weather[0].description;
    let windDirectionDeg = d.wind.deg;
    let windDirection;
    let windSpeed = Math.round(d.wind.speed * 2.23694);

    // Later, add arrow and rotate it based on whihc direction wind is going. Use if statement in function below
    function convertWindDirection (w) {
        if (w >= 348.75 && w <= 365) {
            windDirection = 'N';
        } else if (w >= 0 && w < 11.25) {
            windDirection = 'N';
        } else if (w >= 11.25 && w < 33.75) {
            windDirection = 'NNE';
        } else if (w >= 33.75 && w < 56.25) {
            windDirection = 'NE';
        } else if (w >= 56.25 && w < 78.75) {
            windDirection = 'ENE';
        } else if (w >= 78.75 && w < 101.25) {
            windDirection = 'E'; 
        } else if (w >= 101.25 && w < 123.75) {
            windDirection = 'ESE';
        } else if (w >= 123.75 && w < 146.25) {
            windDirection = 'SE';
        } else if (w >= 146.25 && w < 168.75) {
            windDirection = 'SSE';
        } else if (w >= 168.75 && w < 191.25) {
            windDirection = 'S';
        } else if (w >= 191.25 && w < 213.75) {
            windDirection = 'SSW';
        } else if (w >= 213.75 && w < 236.25) {
            windDirection = 'SW';
        } else if (w >= 236.25 && w < 258.75) {
            windDirection = 'WSW';
        } else if (w >= 258.75 && w < 281.25) {
            windDirection = 'W';
        } else if (w >= 281.25 && w < 303.75) {
            windDirection = 'WNW';
        } else if (w >= 303.75 && w < 326.25) {
            windDirection = 'NW';
        } else if (w >= 326.25 && w < 348.75) {
            windDirection = 'NNW';
        } 
    }
    convertWindDirection(windDirectionDeg);
    console.log(windDirection);
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('wind-speed').innerHTML = windSpeed;
    document.getElementById('wind-direction').innerHTML = windDirection;
    
    
    

    console.log(d.weather.main);

    
    if( description.indexOf('rain') > 0 ) {
            document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
            document.body.className = 'sunny';
    }

    submit.addEventListener('click', function bikeOrBus () {
    //  travelDirection = travel.value;
    //  postCodeValue = postCode.value;
    // alert(travelDirection);
    // Add wind speed in once other tests defintiely work
    // ADD FOR WNW/SWS/NWN/NEN/ESE ETC

    if (travelDirection === 'N' && windDirection === 'S') {
        console.log('Bus');
    } else if (travelDirection === 'NE' && windDirection === 'SW') {
        console.log('Bus');
    } else if (travelDirection === 'E' && windDirection === 'W') {
        console.log('Bus');
    } else if (travelDirection === 'SE' && windDirection === 'NW') {
        console.log('Bus');
    } else if (travelDirection === 'S' && windDirection === 'N') {
        console.log('Bus');
    } else if (travelDirection === 'SW' && windDirection === 'NE') {
        console.log('Bus');
    } else if (travelDirection === 'W' && windDirection === 'E') {
        console.log('Bus');
    } else if (travelDirection === 'NW' && windDirection === 'SE') {
        console.log('Bus');
    } else {
        console.log('Bike');
    }
    });
}

window.onload = function() {
    weatherBalloon( 'bn2' );
}

// Collect post code from enter.js
let postCodeValue = localStorage.getItem("postCodeValue");
console.log(postCodeValue);

// Set variables
const travel = document.getElementById('direction');
const submit = document.getElementById('submit');
const arrow = document.getElementById('arrow');
const result = document.getElementById('bike-or-bus');
let travelDirection;

// Brighton cityID
// const cityID = 2654710;


function weatherBalloon( postCode ) {
    var key = '36b033476dd5cea0c38cb227411b005f';
    // Fetch API with my key and users postcode
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

    // Later, add arrow and rotate it based on which direction wind is going. Use if statement in function below
    function convertWindDirection (w) {
        if (w >= 326.25 && w <= 360) {
            windDirection = 'N';
            arrow.style.transform = "rotate(180deg)";
        } else if (w >= 0 && w < 11.25) {
            windDirection = 'N';
            arrow.style.transform = "rotate(180deg)";
        } else if (w >= 11.25 && w < 56.25) {
            windDirection = 'NE';
            arrow.style.transform = "rotate(45deg)";
        } else if (w >= 56.25 && w < 101.25) {
            windDirection = 'E'; 
            arrow.style.transform = "rotate(90deg)";
        } else if (w >= 101.25 && w < 146.25) {
            windDirection = 'SE';
            arrow.style.transform = "rotate(135deg)";
        } else if (w >= 146.25 && w < 191.25) {
            windDirection = 'S';
            arrow.style.transform = "rotate(180deg)";
        } else if (w >= 191.25 && w < 236.25) {
            windDirection = 'SW';
            arrow.style.transform = "rotate(225deg)";
        } else if (w >= 236.25 && w < 281.25) {
            windDirection = 'W';
            arrow.style.transform = "rotate(270deg)";
        } else if (w >= 281.25 && w < 326.25) {
            windDirection = 'NW';
            arrow.style.transform = "rotate(315deg)";
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
    
    // Change background colour based on weather
    if( description.indexOf('rain') > 0 ) {
            document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
            document.body.className = 'sunny';
    }

    submit.addEventListener('click', function bikeOrBus () {
    // Add wind speed in once other tests definitely work
    travelDirection = travel.value;
    console.log(travelDirection);
    if (travelDirection === 'N' && windDirection === 'S') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'NE' && windDirection === 'SW') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'E' && windDirection === 'W') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'SE' && windDirection === 'NW') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'S' && windDirection === 'N') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'SW' && windDirection === 'NE') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'W' && windDirection === 'E') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else if (travelDirection === 'NW' && windDirection === 'SE') {
        console.log('Bus');
        result.innerHTML = 'Bus';
    } else {
        console.log('Bike');
        result.innerHTML = 'Bike';
    }
    });
}

window.onload = function() {
    weatherBalloon( postCodeValue );
}




     // if (w >= 348.75 && w <= 365) {
        //     windDirection = 'N';
        // } else if (w >= 0 && w < 11.25) {
        //     windDirection = 'N';
        // } else if (w >= 11.25 && w < 33.75) {
        //     windDirection = 'NNE';
        // } else if (w >= 33.75 && w < 56.25) {
        //     windDirection = 'NE';
        // } else if (w >= 56.25 && w < 78.75) {
        //     windDirection = 'ENE';
        // } else if (w >= 78.75 && w < 101.25) {
        //     windDirection = 'E'; 
        // } else if (w >= 101.25 && w < 123.75) {
        //     windDirection = 'ESE';
        // } else if (w >= 123.75 && w < 146.25) {
        //     windDirection = 'SE';
        // } else if (w >= 146.25 && w < 168.75) {
        //     windDirection = 'SSE';
        // } else if (w >= 168.75 && w < 191.25) {
        //     windDirection = 'S';
        // } else if (w >= 191.25 && w < 213.75) {
        //     windDirection = 'SSW';
        // } else if (w >= 213.75 && w < 236.25) {
        //     windDirection = 'SW';
        // } else if (w >= 236.25 && w < 258.75) {
        //     windDirection = 'WSW';
        // } else if (w >= 258.75 && w < 281.25) {
        //     windDirection = 'W';
        // } else if (w >= 281.25 && w < 303.75) {
        //     windDirection = 'WNW';
        // } else if (w >= 303.75 && w < 326.25) {
        //     windDirection = 'NW';
        // } else if (w >= 326.25 && w < 348.75) {
        //     windDirection = 'NNW';
        // }  
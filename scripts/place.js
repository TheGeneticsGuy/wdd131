
// Footer Logic
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

// Method:          calculateWindChill( float , int )
// What it Does:    Returns the wind chill based on the temperature and wind speed or "N/A" 
// Formula:         WC (Wind Chill, °F) = 35.74 + 0.6215 × T - 35.75 × V^0.16 + 0.4275 × T × V^0.16
function calculateWindChill(temperature, windSpeed) {

    // Only calculate if within valid range.
    if (temperature <= 50 && windSpeed > 3) {
        let chill =
            (35.74 + (0.6215 * temperature)) -
            (35.75 * Math.pow(windSpeed, 0.16)) +
            (0.4275 * temperature * Math.pow(windSpeed, 0.16));

        return `${chill.toFixed(2)}F`;
    }

    return "N/A";
}

// Wind chill
document.querySelector('#windchill').innerHTML = calculateWindChill(49, 5);
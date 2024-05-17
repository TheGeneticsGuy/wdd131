
// Footer Logic
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

// Method:          calculateWindChill( float , int )
// What it Does:    Returns the wind chill based on the temperature and wind speed or "N/A" 
// Formula:         WC (Wind Chill, °F) = 35.74 + 0.6215 × T - 35.75 × V^0.16 + 0.4275 × T × V^0.16
// WRITTEN AS 1 LINE OF CODE AS PER RUBRIC INSTRUCTIONS OF ASSIGNMENT - APOLOGIES FOR BEING UNREADABLE.
const calculateWindChill = (temperature, windSpeed) => { if (temperature <= 50 && windSpeed > 3) { return `${((35.74 + (0.6215 * temperature)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2)}F`; } return "N/A"; }

// Wind chill
document.querySelector('#windchill').innerHTML = calculateWindChill(93, 5);
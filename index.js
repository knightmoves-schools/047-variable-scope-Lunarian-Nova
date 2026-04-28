// Global variable
let distanceInMiles = 100;

// Function
function estimatedArrivalTime() {
  // Local variable
  let milesPerHour = 50;
  // Return calculation
  return distanceInMiles / milesPerHour;
}

// Set the result element
document.getElementById("result").innerHTML = estimatedArrivalTime();


// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open("GET", "https://api.ipify.org/?format=json");

// Set the request header
xhr.setRequestHeader("Content-Type", "application/json");

// Send the request
xhr.send();

// Listen for the response
xhr.onload = function() {
  // Get the public IP address from the response
  var publicIp = JSON.parse(xhr.responseText).ip;

  // Do something with the public IP address
  alert("Your IP is " + publicIp);
};
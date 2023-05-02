//your JS code here. If required.
// Get the element you want to find the level of
var element = document.getElementById('level');

// Initialize the level to 0
var level = 0;

// Traverse up the DOM tree until you reach the body element
while (element !== document.body) {
  element = element.parentNode;
  level++;
}

// Display the level in an alert message
alert('The level of the element is: ' + level);

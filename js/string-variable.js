var username;
var message;

// Assign values to these variables.
username = 'Stephen';
message = "Hey " + username + 'see our upcoming range';

// Get the element with an id name.
var elName = document.getElementById ('name');
// Replace the content of this element.
elName.textContent = username;

// Get the element with an id note.
var elNote = document.getElmentById('note');
// Replace the content of this element.
elNote.textContent = message;
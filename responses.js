// Get the body element
const body = document.querySelector('body');

// Create an array to store the cursor trail elements
const cursorTrail = [];

// Create a function to create a cursor trail element
function createCursorTrail() {
    // Create a new div element
    const cursor = document.createElement('div');
    // Add a class to the element
    cursor.classList.add('cursor-trail');
    // Append the element to the body
    body.appendChild(cursor);
    // Add the element to the array
    cursorTrail.push(cursor);
    // Remove the oldest element from the array if the length is greater than 10
    if (cursorTrail.length > 10) {
        cursorTrail.shift().remove();
    }
}

// Add an event listener to the body to create a cursor trail element on mousemove
body.addEventListener('mousemove', createCursorTrail);
// Get all elements with the class "color-change"
const colorChangeElements = document.querySelectorAll('.color-change');

// Add an event listener to each element to change the cursor color and shape
colorChangeElements.forEach(element => {
    element.addEventListener('mouseover', event => {
        // Get the background color of the hovered element
        const bgColor = getComputedStyle(event.target).backgroundColor;
        // Set the cursor color and shape based on the background color
        if (bgColor === 'rgb(255, 0, 0)') {
            document.body.style.cursor = 'url(red-cursor.png), auto';
        } else if (bgColor === 'rgb(0, 255, 0)') {
            document.body.style.cursor = 'url(green-cursor.png), auto';
        } else {
            document.body.style.cursor = 'default';
        }
    });
});
// Get the input element
var input = document.getElementById("citations.csv");

// Add an event listener to the input element to read the file when it's changed
input.addEventListener("change", function() {
    // Get the selected file
    var file = input.files[0];

    // Create a new FileReader
    var reader = new FileReader();

    // Add an event listener to the FileReader to read the file when it's loaded
    reader.addEventListener("load", function() {
        // Get the contents of the file
        var csv = reader.result;

        // Parse the CSV data
        var data = Papa.parse(csv, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
        }).data;

        // Get the table element
        var table = document.getElementById("table");

        // Add the data to the table
        data.forEach(function(row) {
            var tr = document.createElement("tr");
            for (var key in row) {
                var td = document.createElement("td");
                td.innerHTML = row[key];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        });
    });

    // Read the file as text
    reader.readAsText(file);
});

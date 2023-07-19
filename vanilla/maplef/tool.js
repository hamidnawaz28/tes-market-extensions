var myMap = L.map('map').setView([54.66026740512665, -2.0915721384020283], 7);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(myMap);

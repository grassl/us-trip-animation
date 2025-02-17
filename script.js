// Initialize Leaflet Map
var map = L.map('map').setView([39.5, -77.5], 6);  // Centered between NY and DC

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add Trip Markers
var stops = [
    { name: "New York City", coords: [40.7128, -74.0060] },
    { name: "Philadelphia", coords: [39.9526, -75.1652] },
    { name: "Washington, D.C.", coords: [38.9072, -77.0369] }
];

stops.forEach(stop => {
    L.marker(stop.coords).addTo(map)
        .bindPopup(`<b>${stop.name}</b>`);
});

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#new-york img", {
    opacity: 0, y: 50, duration: 1,
    scrollTrigger: "#new-york"
});

gsap.from("#philadelphia img", {
    opacity: 0, y: 50, duration: 1,
    scrollTrigger: "#philadelphia"
});

gsap.from("#washington img", {
    opacity: 0, y: 50, duration: 1,
    scrollTrigger: "#washington"
});

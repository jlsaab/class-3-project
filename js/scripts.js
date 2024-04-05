
// my mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiamxzYWFiIiwiYSI6ImNsdWx2MWw0ajBuODgybG13NGJwdm1yYTYifQ.wYroyDZcY8OYGXc-qzEmdA';

// constructing the map element
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    center: [-73.99, 40.73], // starting position [lng, lat]
    zoom: 10, // starting zoom
    bearing: 29,
    style: 'mapbox://styles/mapbox/navigation-day-v1'
});
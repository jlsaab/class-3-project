// my mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiamxzYWFiIiwiYSI6ImNsdWx2MWw0ajBuODgybG13NGJwdm1yYTYifQ.wYroyDZcY8OYGXc-qzEmdA';

// constructing the map element
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-73.99, 40.73], // starting position [lng, lat]
    zoom: 3, // starting zoom
    bearing: 10,
    style: 'mapbox://styles/mapbox/satellite-streets-v12'
});

// adding a search bar for addresses
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }));

// adding zoom and rotate buttons
map.addControl(new mapboxgl.NavigationControl());

// adding functionality to layer menu
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
};
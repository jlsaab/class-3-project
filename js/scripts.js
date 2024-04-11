// my mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiamxzYWFiIiwiYSI6ImNsdWx2MWw0ajBuODgybG13NGJwdm1yYTYifQ.wYroyDZcY8OYGXc-qzEmdA';

// creating template map options
var mapOptions = {
    container: 'map', // container ID
    center: [-73.99, 40.73], // starting position [lng, lat]
    zoom: 3, // starting zoom
    bearing: 10,
    style: 'mapbox://styles/mapbox/satellite-streets-v12'
}

// constructing the map element
const map = new mapboxgl.Map(mapOptions);

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

// take a data file and iterate/loop on each row
homesData.forEach(function (homesRecord) { console.log(homesRecord) });
// double check that each one is coming in individually

// creating markers based on a CSV file by telling it to loop row after row
homesData.forEach(function (homesRecord) {
    // map.getCanvas().style.cursor = 'pointer';
    // creating the popups
    const popup = new mapboxgl.Popup({ offset: 40, anchor: 'bottom' })
        .setText(`We lived in ${homesRecord.town}, ${homesRecord.place} for ${homesRecord.times}.`);
    // creating the markers
    new mapboxgl.Marker({ scale: 1.5, color: 'color'}).setLngLat([homesRecord.longitude, homesRecord.latitude]).setPopup(popup).addTo(map);
    map.getCanvas().style.cursor = 'pointer'
})


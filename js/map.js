/* eslint-disable no-console */
const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat:  48.703827,
    lng: 44.510325,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const marker = L.marker(
  {
    lat:  48.703827,
    lng: 44.510325,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

marker.addTo(map);

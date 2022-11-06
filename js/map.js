/* eslint-disable no-console */
import { disablerToggler } from './disablerToggler.js';
import { offers } from './card.js';
import { generateCard } from './card.js';
import { createRandomArray } from './data.js';

const LAT = 35.67347;
const LNG = 139.75863;
const adFormAddress = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const additionalPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
    disablerToggler();
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const createAdPinMarkers = (offersList) => {
  offersList.forEach((itemOfList) => {
    const additionalMarker = L.marker({
      lat: itemOfList.location.lat,
      lng: itemOfList.location.lng,
    },
    {
      icon: additionalPinIcon,
      draggable: true,
    },
    );
    additionalMarker.addTo(map).bindPopup('test');
  });
};

createAdPinMarkers(offers);

marker.on('moveend', (evt) => {
  adFormAddress.value = `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`;

  map.setView({
    lat: evt.target.getLatLng().lat,
    lng: evt.target.getLatLng().lng,
  });
});

marker.addTo(map);

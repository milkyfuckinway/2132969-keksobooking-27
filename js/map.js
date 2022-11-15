import { changeFormState } from './form-state.js';
import { generatePopup } from './popup.js';
import { sendRequest } from './fetch.js';
import { filterData, MAX_OFFERS } from './filter.js';

const LAT = 35.67500;
const LNG = 139.75000;
const adFormAddress = document.querySelector('#address');
const mapCanvas = document.querySelector('.map__canvas');
const filteringList = document.querySelector('.map__filters');

const resetAddress = () => {
  adFormAddress.value = `${LAT.toFixed(5)} ${LNG.toFixed(5)}`;
};

const map = L.map('map-canvas');
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

const additionalPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const markerGroup = L.layerGroup().addTo(map);

const createAdPinMarkers = (offersList) => {
  offersList.forEach((itemOfList) => {
    const additionalMarker = L.marker({
      lat: itemOfList.location.lat,
      lng: itemOfList.location.lng,
    },
    {
      icon: additionalPinIcon,
    },
    );
    additionalMarker.addTo(markerGroup).bindPopup(generatePopup(itemOfList));
  });
};

mainMarker.on('moveend', (evt) => {
  adFormAddress.value = `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`;
  map.setView({
    lat: evt.target.getLatLng().lat,
    lng: evt.target.getLatLng().lng,
  });
});

mainMarker.addTo(map);

const resetMapPosition = () => {
  mainMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });
  map.setView({
    lat: LAT,
    lng: LNG,
  }, 13);
  map.closePopup();
};

let adverts = [];

const removeMapPin = () => {
  markerGroup.clearLayers();
};

const onMapFiltersChange = () => {
  removeMapPin();
  createAdPinMarkers(filterData(adverts));
};


const onSuccess = (data) => {
  adverts = data.slice();
  createAdPinMarkers(adverts.slice(0, MAX_OFFERS));
  changeFormState();
  filteringList.addEventListener('change', onMapFiltersChange);
};

const showNoConnetcionErrorMessage = () => {
  const noConnetcionErrorMessage = document.createElement('div');
  noConnetcionErrorMessage.style.zIndex = '400';
  noConnetcionErrorMessage.style.position = 'absolute';
  noConnetcionErrorMessage.style.left = '0';
  noConnetcionErrorMessage.style.top = '0';
  noConnetcionErrorMessage.style.right = '0';
  noConnetcionErrorMessage.style.fontSize = '20px';
  noConnetcionErrorMessage.style.height = 'max-content';
  noConnetcionErrorMessage.style.color = '#ffffff';
  noConnetcionErrorMessage.style.textTransform = 'uppercase';
  noConnetcionErrorMessage.style.textAlign = 'center';
  noConnetcionErrorMessage.style.backgroundColor = '#DC343B';
  noConnetcionErrorMessage.textContent = 'Не удалось установить соединение с сервером';
  mapCanvas.append(noConnetcionErrorMessage);
};

const onError = () => {
  showNoConnetcionErrorMessage();
};

map.on('load', () => {
  sendRequest(onSuccess, onError, 'GET');
  resetAddress();
})
  .setView({
    lat: LAT,
    lng: LNG,
  }, 13);

export { resetAddress, resetMapPosition };

import { carAvailabilityStates } from './carEnums';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const cars = [
  {
    id: 1,
    img: '/media/car1.gif',
    name: 'A basic car',
    make: 'Honda',
    model: 'Sedan',
    year: 2018,
  },{
    id: 2,
    img: '/media/car2.gif',
    name: 'B less basic car',
    make: 'Toyota',
    model: 'Minivan',
    year: 2017,
  },{
    id: 3,
    img: '/media/car3.gif',
    name: 'C His Fancy Car',
    make: 'Aston Martin',
    model: 'Supercar',
    year: 2016,
  },{
    id: 4,
    img: '/media/car4.gif',
    name: 'D Her Fancy Car',
    make: 'Mercedes',
    model: 'Flashy sportscar',
    year: 2015,
  },{
    id: 5,
    img: '/media/car5.gif',
    name: 'E Hauling truck',
    make: 'Ford',
    model: 'Bigtruck',
    year: 2016,
  },{
    id: 6,
    img: '/media/car6.gif',
    name: 'F Pulling truck',
    make: 'Ford',
    model: 'Truck',
    year: 2016,
  },{
    id: 7,
    img: '/media/car7.gif',
    name: 'G Large Car',
    make: 'GM',
    model: 'Bigcar',
    year: 2016,
  },{
    id: 8,
    img: '/media/car8.gif',
    name: 'H Small Car',
    make: 'GM',
    model: 'Smallcar',
    year: 2016,
  },{
    id: 9,
    img: '/media/car9.gif',
    name: 'I Winter driver',
    make: 'Subaru',
    model: 'Thingything',
    year: 2016,
  },{
    id: 10,
    img: '/media/car10.gif',
    name: 'Jalopy',
    make: 'NoName',
    model: 'Old Thing',
    year: 1812,
  },
];

const carAvailability = {
  '1': carAvailabilityStates.inDealership,
  '2': carAvailabilityStates.outOfStock,
  '3': carAvailabilityStates.outOfStock,
  '4': carAvailabilityStates.unavailable,
  '5': carAvailabilityStates.outOfStock,
  '6': carAvailabilityStates.outOfStock,
  '7': carAvailabilityStates.inDealership,
  '8': carAvailabilityStates.inDealership,
  '9': carAvailabilityStates.unavailable,
  '10': carAvailabilityStates.unavailable,
};

export const fetchCars = () => (
  delay(800).then(() => cars)
);

export const fetchCarAvailability = (id) => (
  delay(800).then(() => carAvailability[id])
);

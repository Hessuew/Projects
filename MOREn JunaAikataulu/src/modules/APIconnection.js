import httpClient from './httpClient';

const STATIONS = '/metadata/stations';
const TRAINS = '/live-trains/station/';
const ARRIVINGTRAINS = '?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=1440&minutes_after_arrival=0';
const DEPARTURINGTRAINS = '?minutes_before_departure=1440&minutes_after_departure=0&minutes_before_arrival=0&minutes_after_arrival=0';

const getAllStations = () => httpClient.get(STATIONS);

const get10ArrivingTrains = (choosedCity) => httpClient.get(TRAINS + choosedCity + ARRIVINGTRAINS);
const get10ADeparturingTrains = (choosedCity) => httpClient.get(TRAINS + choosedCity + DEPARTURINGTRAINS);

export {
    getAllStations,
    get10ArrivingTrains,
    get10ADeparturingTrains
}
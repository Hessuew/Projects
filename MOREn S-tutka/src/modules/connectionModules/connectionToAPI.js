import httpClient from "./httpClient";

const TYPEWEATHER = "weather?id=";
const TYPEFORECAST = "forecast?id=";
const METRICID = "&units=metric&appid=";
const KEY = "5a6d31d2b562c679c5ecf125e43a7863";
const CITY1TAMPERE = "634964";
const CITY2JYVÄSKYLÄ = "655195";
const CITY3KUOPIO = "650225";
const CITY4HELSINKI = "658225";


const getCity1Exact = () => httpClient.get(TYPEWEATHER + CITY1TAMPERE + METRICID + KEY);
const getCity2Exact = () => httpClient.get(TYPEWEATHER + CITY2JYVÄSKYLÄ + METRICID + KEY);
const getCity3Exact = () => httpClient.get(TYPEWEATHER + CITY3KUOPIO + METRICID + KEY);
const getCity4Exact = () => httpClient.get(TYPEWEATHER + CITY4HELSINKI + METRICID + KEY);

const getCity1Hourly = () => httpClient.get(TYPEFORECAST + CITY1TAMPERE + METRICID + KEY);
const getCity2Hourly = () => httpClient.get(TYPEFORECAST + CITY2JYVÄSKYLÄ + METRICID + KEY);
const getCity3Hourly = () => httpClient.get(TYPEFORECAST + CITY3KUOPIO + METRICID + KEY);
const getCity4Hourly = () => httpClient.get(TYPEFORECAST + CITY4HELSINKI + METRICID + KEY);

export {
    getCity1Exact,
    getCity2Exact,
    getCity3Exact,
    getCity4Exact,
    getCity1Hourly,
    getCity2Hourly,
    getCity3Hourly,
    getCity4Hourly
}
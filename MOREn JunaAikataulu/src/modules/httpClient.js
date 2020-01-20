import axios from 'axios';
import { throttleAdapterEnhancer } from "axios-extensions";
import store from "@/store";

const throttleConfig = {
    threshold: 120*1000 
}

const httpClient = axios.create({
    baseURL: 'https://rata.digitraffic.fi/api/v1/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    adapter: throttleAdapterEnhancer(axios.defaults.adapter, throttleConfig)
  });
  
const errorInterceptor = error => {
    switch (error.response.status) {
        case 400:
            window.console.error(error.response.status, error.message);
            store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            break;
        case 408:
            window.console.error(error.response.status, error.message);
            store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            break;
        case 429:
            window.console.error(error.response.status, error.message);
            store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            break;
        default:
            window.console.error(error.response.status, error.message);
            store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: "Server error",
                timeout: 10000,
                color: "error"
            });

    }
    return Promise.reject(error);
}
const responseInterceptor = response => {
    switch (response.status) {
        case 200:
            //tämä on tehty jatkokehitystä varten, tällä hetkellä ei käytännöllinen
            break;
        default:
    }

    return response;
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
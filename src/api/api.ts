import axios from 'axios';
import {Config} from '../config';

const api = axios.create({
  baseURL: Config.apiURL,
  timeout: 20000,
  headers: {'X-RapidAPI-Key': Config.rapidAPIKey},
});

const mapsApi = axios.create({
  baseURL: Config.mapsURL,
  timeout: 20000,
  headers: {'X-RapidAPI-Key': Config.mapsAPIKey},
});

export {api, mapsApi};

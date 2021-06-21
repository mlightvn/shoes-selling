import {API_HOST} from "@/config/constants.js"

import axios from "axios";
// const axios = require('axios').default;

let Api = axios.create({
  baseURL: API_HOST
});

Api.defaults.withCredentials = false;

export default Api;

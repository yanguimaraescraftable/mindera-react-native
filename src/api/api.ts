import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
});

let catsAPIKey = 'live_2TPmVLBhq6jPadsj0ef0tLQ6tgflrK2g3rpXihCHlrwQgT6tIh0YcoX2os5a26DG'

api.defaults.headers['X-API-KEY'] = catsAPIKey;
export default api
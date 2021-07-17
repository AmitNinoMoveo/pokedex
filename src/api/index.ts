import axios from "axios";

enum apiUrl {
    Development = 'https://pokeapi.co/api/v2/',
}

async function apiGet(url: string):Promise<any>{
    return await axios.get(apiUrl.Development+url);
};

const api = {
    get: apiGet,
};

export default api;
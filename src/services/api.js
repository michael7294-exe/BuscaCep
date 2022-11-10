import axios from "axios";

//83535000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api ;
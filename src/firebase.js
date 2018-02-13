import axios from 'axios';

const conexion = axios.create({
    baseURL: 'https://andurinya-95963.firebaseio.com/'
});

export default conexion;
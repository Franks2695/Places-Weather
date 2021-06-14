const axios = require('axios');
const colors = require('colors');

const apiKey = '3b4f21384060b3aea44aacde20b98a11';

const getClima = async(ciudad) => {

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        const respuesta = await axios.get(url);
        return [respuesta.data.coord.lon, respuesta.data.coord.lat, respuesta.data.main.temp, respuesta.data.main.feels_like, respuesta.data.main.humidity, respuesta.data.sys.country];
    } catch (error) {
        console.log("------- ERROR -------".red, error.data);
    }
}

module.exports = {
    getClima
}
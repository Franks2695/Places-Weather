const axios = require('axios');
const colors = require('colors');

const apiKey = '3b4f21384060b3aea44aacde20b98a11';

const getClima = async(ciudad) => {

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        const respuesta = await axios.get(url);
        return [respuesta.data.coord.lon, respuesta.data.coord.lat, respuesta.data.weather[0].id, respuesta.data.weather[0].main, respuesta.data.weather[0].description, respuesta.data.weather[0].icon, respuesta.data.base, respuesta.data.main.temp, respuesta.data.main.feels_like, respuesta.data.main.temp_min, respuesta.data.main.temp_max, respuesta.data.main.pressure, respuesta.data.main.humidity, respuesta.data.main.sea_level, respuesta.data.main.grnd_level, respuesta.data.visibility, respuesta.data.wind.speed, respuesta.data.wind.deg, respuesta.data.wind.gust, respuesta.data.clouds.all, respuesta.data.dt, respuesta.data.sys.type, respuesta.data.sys.id, respuesta.data.sys.country, respuesta.data.timezone, respuesta.data.id, respuesta.data.cod];
    } catch (error) {
        console.log("------- ERROR -------".red, error.data);
    }
}

module.exports = {
    getClima
}
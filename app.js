const clima = require('./controlador/clima')
const colors = require('colors');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad;

clima.getClima(ciudad)
    .then(respuesta => {
        if (respuesta == undefined) {
            console.log(`No existe dicha ciudad`.bgRed);
        } else {
            console.log("==================================".bgGreen);
            console.log(" - - - - PLACE'S WEATHER - - - -  ".inverse.green);
            console.log("==================================".bgGreen);
            console.log();
            console.log(`------------- ${ciudad} -------------`.bgMagenta);
            console.log();
            const [lon, lat, temp, feels, hum, pais] = respuesta;
            console.log('PAÍS =', pais);
            console.log('LONGITUD =', lon);
            console.log('LATITUD =', lat);
            console.log('HUMEDAD =', hum);
            console.log();
            console.log('FRIO =', '  '.bgBlue, '  TEMPLADO =', '  '.inverse.white, '  CALIENTE = ', '  '.bgRed);
            console.log();
            if (temp <= 15) {
                console.log(colors.bgBlue('TEMPERATURA =', temp, 'C°'));
                console.log(colors.bgBlue('PERO SE SIENTE COMO DE =', feels, 'C°'));
            } else if (temp > 15 && temp <= 22) {
                console.log(colors.inverse.white('TEMPERATURA =', temp, 'C°'));
                console.log(colors.inverse.white('PERO SE SIENTE COMO DE =', feels, 'C°'));
            } else if (temp > 22) {
                console.log(colors.bgRed('TEMPERATURA =', temp, 'C°'));
                console.log(colors.bgRed('PERO SE SIENTE COMO DE =', feels, 'C°'));
            }
        }
    }).catch(err => {
        console.log(err);
    });
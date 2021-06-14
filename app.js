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
            const [lon, lat, idw, main, desc, icon, base, temp, feels, tmin, tmax, pres, hum, seal, grandl, visi, speedw, degw, gustw, cloud, dt, type, idp, pais, timez, idg, cod] = respuesta;
            console.log('LONGITUD =', lon);
            console.log('LATITUD =', lat);
            console.log('ID CLIMA =', idw);
            console.log('ESTADO =', main);
            console.log('DESCRIPCIÓN =', desc);
            console.log('ICONO =', icon);
            console.log('BASE =', base);
            console.log();
            console.log('FRIO =', '  '.bgBlue, '  TEMPLADO =', '  '.inverse.white, '  CALIENTE = ', '  '.bgRed);
            console.log();
            if (temp <= 15) {
                console.log(colors.bgBlue('TEMPERATURA =', temp, 'C°'));
            } else if (temp > 15 && temp <= 22) {
                console.log(colors.inverse.white('TEMPERATURA =', temp, 'C°'));
            } else if (temp > 22) {
                console.log(colors.bgRed('TEMPERATURA =', temp, 'C°'));
            }
            console.log();
            console.log('PERO SE SIENTE COMO DE =', feels, 'C°');
            console.log('TEMPERATURA MÍNIMA =', tmin);
            console.log('TEMPERATURA MÁXIMA =', tmax);
            console.log('PRESIÓN =', pres);
            console.log('HUMEDAD =', hum);
            console.log('NIVEL DEL MAR =', seal);
            console.log('NIVEL DE LA TIERRA =', grandl);
            console.log('VISIBILIDAD =', visi);
            console.log('VELOCIDAD DEL VIENTO =', speedw);
            console.log('GRADOS DEL VIENTO =', degw);
            console.log('RÁFAGA DEL VIENTO =', gustw);
            console.log('NUBES =', cloud);
            console.log('DT =', dt);
            console.log('TIPO =', type);
            console.log('ID PAÍS =', idp);
            console.log('PAÍS =', pais);
            console.log('ZONA HORARIA =', timez);
            console.log('ID GENERAL =', idg);
            console.log('CÓDIGO =', cod);
        }
    }).catch(err => {
        console.log(err);
    });
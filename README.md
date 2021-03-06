# PLACES-WEATHER - APLICACI脫N EN NODEJS SOBRE EL CLIMA DE CIUADES DEL MUNDO ENTERO

_Aplicaci贸n en NodeJS que permite visualizar informaci贸n acerca de una ciudad del Mundo que se desee consultar.

### Pre-requisitos 馃搵

_Para la realizaci贸n y ejecuci贸n de esta aplicaci贸n, debe tener instalado lo siguiente en su m谩quina:_

* **VISUAL STUDIO CODE**
* **NODE-JS**
* **NPM**

_Librer铆as necesarias para que el programa funcione, pero si es que no desea hacerlo, el archivo llamado **package.json** ya contiene estas librer铆as._

* **yargs**
* **colors**

### Instalaci贸n 馃敡

_Primer vamos a instalar lo m谩s importante, **Visual Studio Code**, para ello podemos guiarnos en la siguiente p谩gina, en donde nos ense帽a paso a paso c贸mo instalar **Visual Studio Code**._

_https://support.academicsoftware.eu/hc/es/articles/360006916138-C%C3%B3mo-instalar-Microsoft-Visual-Studio-Code_

_Ahora tenemos que instalar NodeJs y npm en nuestro **Visual Studio Code** y de la misma manera podemos guiarnos en la siguiente p谩gina para poder instalarlo sin complicaciones._

_https://developer.ibm.com/languages/node-js/tutorials/learn-nodejs-installing-node-nvm-and-vscode/_

_Una vez hecho todo lo anterior, si esque no se tiene el archivo **package.json**, entonces podemos instalar las librer铆as con el siguiente comando:_

```
npm install <librer铆a> --save
```

_Al acabar la instalaci贸n de todas las librer铆as podremos verlas dentro del archivo **package.json**._

_Para esta aplicaci贸n se hizo uso de la informaci贸n de la p谩gina web **https://openweathermap.org/**_

_Antes de pasar a la parte de la ejecuci贸n de pruebas, recordar que este programa funciona con modulos de node, as铆 que para que el programa pueda ejecutarse correctamente, se debe escribir el siguiente comando:_

```
npm install
```

_Ahora si podemos seguir con la ejecuci贸n de las pruebas_

## Ejecutando las pruebas 鈿欙笍

_Para la ejecuci贸n de la aplicaci贸n debe seguir la siguiente estructura:_

```
node app.js -c <Ciudad>
```

_Una vez la aplicaci贸n entregue los resultados de la ciudad deseada, se podr谩 observar que si la temperatura de dicha ciudad se encuentra fr铆a, la temperatura se resaltar谩 con color azul, si la temperatura es regular, se resaltar谩 de color blanco, y si la temperatura es caliente, se resaltar谩 de color rojo._

**TEMPERATURA FR脥A**

![frio](https://user-images.githubusercontent.com/76794301/121845373-f3b27e80-ccaa-11eb-83b8-385ae987389b.JPG)

**TEMPERATURA REGULAR**

![templado](https://user-images.githubusercontent.com/76794301/121845643-5e63ba00-ccab-11eb-976a-69b8a50fe89e.JPG)

**TEMPERATURA CALIENTE**

![caliente](https://user-images.githubusercontent.com/76794301/121845519-2eb4b200-ccab-11eb-949b-186d3a8e37b5.JPG)

## Construido con 馃洜锔?

* [Visual Studio Code](https://code.visualstudio.com/) - IDE de desarrollo
* [NodeJs](https://nodejs.org/es/) - Entorno de ejecuci贸n para JavaScript

## Autores 鉁掞笍

* **Franks Sa帽ay** - *Trabajo Inicial, Documentaci贸n* - [Franks2695](https://github.com/Franks2695)
---

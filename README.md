# PLACES-WEATHER - APLICACIÓN EN NODEJS SOBRE EL CLIMA DE CIUADES DEL MUNDO ENTERO

_Aplicación en NodeJS que permite visualizar información acerca de una ciudad del Mundo que se desee consultar mediante comandos_

### Pre-requisitos 📋

_Para la realización y ejecución de esta aplicación, debe tener instalado lo siguiente en su máquina:_

* **VISUAL STUDIO CODE**
* **NODE-JS**
* **NPM**

_Librerías necesarias para que el programa funcione, pero si es que no desea hacerlo, el archivo llamado **package.json** ya contiene estas librerías._

* **yargs**
* **colors**

### Instalación 🔧

_Primer vamos a instalar lo más importante, **Visual Studio Code**, para ello podemos guiarnos en la siguiente página, en donde nos enseña paso a paso cómo instalar **Visual Studio Code**._

_https://support.academicsoftware.eu/hc/es/articles/360006916138-C%C3%B3mo-instalar-Microsoft-Visual-Studio-Code_

_Ahora tenemos que instalar NodeJs y npm en nuestro **Visual Studio Code** y de la misma manera podemos guiarnos en la siguiente página para poder instalarlo sin complicaciones._

_https://developer.ibm.com/languages/node-js/tutorials/learn-nodejs-installing-node-nvm-and-vscode/_

_Una vez hecho todo lo anterior, si esque no se tiene el archivo **package.json**, entonces podemos instalar las librerías con el siguiente comando:_

```
npm install <librería> --save
```

_Al acabar la instalación de todas las librerías podremos verlas dentro del archivo **package.json**._

_Para esta aplicación se hizo uso de la información de la página web **https://openweathermap.org/**_

_Antes de pasar a la parte de la ejecución de pruebas, recordar que este programa funciona con modulos de node, así que para que el programa pueda ejecutarse correctamente, se debe escribir el siguiente comando:_

```
npm install
```

_Ahora si podemos seguir con la ejecución de las pruebas_

## Ejecutando las pruebas ⚙️

_Para la ejecución de la aplicación debe seguir la siguiente estructura:_

```
node app.js -c <Ciudad>
```

_Una vez la aplicación entregue los resultados de la ciudad deseada, se podrá observar que si la temperatura de dicha ciudad se encuentra fría, la temperatura se resaltará con color azul, si la temperatura es regular, se resaltará de color blanco, y si la temperatura es caliente, se resaltará de color rojo._

**TEMPERATURA FRÍA**

![frio](https://user-images.githubusercontent.com/76794301/121845373-f3b27e80-ccaa-11eb-83b8-385ae987389b.JPG)

**TEMPERATURA REGULAR**

![templado](https://user-images.githubusercontent.com/76794301/121845643-5e63ba00-ccab-11eb-976a-69b8a50fe89e.JPG)

**TEMPERATURA CALIENTE**

![caliente](https://user-images.githubusercontent.com/76794301/121845519-2eb4b200-ccab-11eb-949b-186d3a8e37b5.JPG)

## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com/) - IDE de desarrollo
* [NodeJs](https://nodejs.org/es/) - Entorno de ejecución para JavaScript

## Autores ✒️

* **Franks Sañay** - *Trabajo Inicial, Documentación* - [Franks2695](https://github.com/Franks2695)
---

// IMPORTAR LA PRIMERA ESCENA
import Firstscene from './scenes/Firstscene.js'

const config = {
    // OPCIONALES
    title: 'Titulo juego',
    url: 'ces-vegamedia.es/',
    version: '0.0.1',

    // OPCIONAL
    pixelArt: true, // REMARCAR LOS PIXELES DE LAS IMÁGENES

    // OBLIGATORIO
    type: Phaser.AUTO, // WEBGL O CANVAS O AUTOMÁTICO
    backgroundColor: '#34495E', // FONDO DEL LIENZO
    physics: {
        default: 'arcade', // Motor de física por defecto (en este caso, Arcade)
        arcade: {
            gravity: { y:0 }, // Configurar la gravedad si es necesario
            debug: false // Activa o desactiva el modo de depuración de física
        }
    },
    scale: {
        width: 1136, // TAMAÑO DEL LIENZO
        height: 640,
        parent: 'container', // ID DEL CONTENEDOR
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene: [Firstscene]
}
// CREAR LA INSTACIA DEL JUEGO
const game = new Phaser.Game(config);
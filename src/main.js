//importar la primera escena 
import Firstscene from './scenes/Firstscene.js'
const config={
    //opcionales 
    title:'Titulo Juego',
    url:'ces-vegamedia.es/',
    version:'0.0.1',

    //opcional 
    pixelArt:true,//remarcar los pixeles de las imagenes
    //obligatorio
    type:Phaser.AUTO,       //webgl o canvas o automático
    backgroundColor:'#34495E', //fondo del lienzo
    scale:{
        width: 1136, //tamaño del lienzo
        height:640,
        parent:'container',  //id del contenedor
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene:[Firstscene]
    
};
//crear la instancia del juego 
const game=new Phaser.Game(config);
class Firstscene extends Phaser.Scene{
    constructor(){
        super('Firstscene');
    }
    init(){
        //variable que nos indica si le hemos dado al clic izquierdo del raton y así comenxar el juego 
        this.flagFirstMouseDown=false;
    }
    preload(){
        this.load.image('background','assets/images/background.png');
        this.load.spritesheet(
            'horse',
            'assets/images/horse.png',
            {frameWidth:84,frameHeight:156}
        );

    }
    create(){
        this.background=this.add.image(this.sys.game.canvas.width/2,this.sys.game.canvas.height/2,'background');
        this.horse=this.add.image(42,78,'horse',0);
        this.horse.x=this.sys.game.canvas.width/2;
        this.horse.y=this.sys.game.canvas.height/2;
        this.input.on('pointerdown',this.onTap,this);
    }
    update(time,delta){
        if(this.flagFirstMouseDown){
            var pointerX=this.input.x;
            var pointerY=this.input.y;
            var distX=pointerX-this.horse.x;
            var distY=pointerY-this.horse.y;
            //El modificado rde 0.02 lo usaremos para la velocidad del caballo
            this.horse.x+=distX*0.02;
            this.horse.y+=distY*0.02;
        }
    }
    //custom functions
    onTap(){
        this.flagFirstMouseDown=true;
    }
}
export default Firstscene;
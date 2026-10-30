var AMOUNT_DIAMONDS=30;
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
        this.load.spritesheet(
            'diamonds',
            'assets/images/diamonds.png',
            {frameWidth:81,frameHeight:84}
        );

    }
    create(){
         this.background = this.add.sprite(this.sys.game.canvas.width/2, 
                                          this.sys.game.canvas.height/2, 'background');
        
        // Crear sprite del caballo y habilitar la física
        this.horse = this.physics.add.sprite(this.sys.game.canvas.width/2, 
                                            this.sys.game.canvas.height/2, 'horse', 0);

        this.horse.x = this.sys.game.canvas.width/2;
        this.horse.y = this.sys.game.canvas.height/2;
        this.horse.body.setSize(84, 156); // Configurar el cuerpo de colisión
        this.input.on('pointerdown', this.onTap, this);
        
        // Crear un grupo de física para los diamantes
        this.diamonds = this.physics.add.group();
        //Añadiremos tambien el caballo para que ningún diamante
        //toque con el caballo inicialmente
        this.diamonds.add(this.horse);
        
        for (var i = 0; i < AMOUNT_DIAMONDS; i++) {
            var diamond = this.physics.add.sprite(this.sys.game.canvas.width / 2,
            this.sys.game.canvas.height / 2, 'diamonds', Phaser.Math.Between(0, 3));

            var escala = 0.30 + Phaser.Math.FloatBetween(0, 1);
            diamond.setScale(escala);
            diamond.body.setSize(81, 84);

            // Verificar si el nuevo diamante se superpone con los diamantes existentes
            var overlapping = true;
            var safeAttempts = 0;
            while (overlapping && safeAttempts < 100) {
                diamond.x = Phaser.Math.Between(50, 1050);
                diamond.y = Phaser.Math.Between(50, 600);
                overlapping = this.checkOverlap(diamond);
                safeAttempts++;
            }

            // Agregar el diamante al grupo
            this.diamonds.add(diamond);
            
        }
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
            //Verificar colisipnes y eliminar diamantes
            this.diamonds.children.iterate(function(diamond){
                if(diamond instanceof Phaser.GameObjects.Sprite){
                    if(Phaser.Geom.Intersects.RectangleToRectangle(this.horse.getBounds(),diamond.getBounds())){
                        if(diamond !== this.horse){
                            diamond.destroy(); //Eliminar el diamante
                        }
                    }
                }
            },this);
        }
    }
    //custom functions
    onTap(){
        this.flagFirstMouseDown=true;
    }
    checkOverlap(sprite){
        var overlapping=false;
        this.diamonds.getChildren().forEach(diamond =>{
            if(Phaser.Geom.Intersects.RectangleToRectangle(sprite.getBounds(),diamond.getBounds())){
                overlapping=true;
            }
        });
        return overlapping;
    }
}
export default Firstscene;
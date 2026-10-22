class Firstscene extends Phaser.Scene{
    constructor(){
        super('Firstscene');
    }
    init(){
        console.log("init");
    }
    preload(){
        console.log("preload");
    }
    create(){
        console.log("create");
    }
    update(time,delta){
        console.log("update");
    }
}
export default Firstscene;
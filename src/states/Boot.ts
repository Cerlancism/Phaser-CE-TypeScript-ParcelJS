import { UIKeyValues, UIKeys } from "/assets"

export class Boot extends Phaser.State
{
    public static key = "Boot"
    public static onCreate = new Phaser.Signal()

    public key = Boot.key

    init()
    {
        console.log("State", this.key)
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.setMinMax(320, 240, 1280, 960)
        // Disable generic right click menu.
        this.game.canvas.addEventListener('contextmenu', (event) => event.preventDefault())
        this.game.stage.disableVisibilityChange = true
    }

    preload()
    {
        this.load.image(UIKeys.preloader_bar, UIKeyValues.preloader_bar)
    }

    create()
    {
        Boot.onCreate.dispatch()
    }
}

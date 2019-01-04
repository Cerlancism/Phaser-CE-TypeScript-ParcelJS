import { UIKeyValues, UIKeys } from "/assets"
import { Preloader } from "./Preloader"

export class Boot extends Phaser.State
{
    init()
    {
        console.log("State", this.key)
        this.input.maxPointers = 1
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
        this.game.canvas.parentElement.style.removeProperty("visibility")
        this.state.start(Preloader.name)
    }
}

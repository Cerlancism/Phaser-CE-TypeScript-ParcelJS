import { UIKeys, GameAssetValues, GameAssetKeys } from "/assets"
import { GamePlay } from "./GamePlay"

export class Preloader extends Phaser.State
{
    preloadBar: Phaser.Sprite
    preloadText: Phaser.Text

    init()
    {
        console.log("State", this.key)
        console.log("KeyValues", GameAssetValues, "Keys", GameAssetKeys)
    }

    preload()
    {
        this.preloadText = this.add.text(this.camera.bounds.centerX, this.camera.height - 100, "Loading.", { fontSize: 16, font: "Courier New", wordWrap: true, wordWrapWidth: 600 })
        this.preloadText.anchor.set(0.5, 0.5)

        this.preloadBar = this.add.sprite(100, this.camera.bounds.centerY, UIKeys.preloader_bar)
        this.preloadBar.anchor.set(0, 0.5)
        this.load.setPreloadSprite(this.preloadBar)

        this.load.tilemap('level1', undefined, require('/assets/game/level1.json'), Phaser.Tilemap.TILED_JSON)
        this.load.image(GameAssetKeys["tiles-1"], GameAssetValues["tiles-1"])
        this.load.spritesheet(GameAssetKeys.dude, GameAssetValues.dude, 32, 48)
        this.load.spritesheet(GameAssetKeys.droid, GameAssetValues.droid, 32, 32)
        this.load.image(GameAssetKeys.starSmall, GameAssetValues.starSmall)
        this.load.image(GameAssetKeys.starBig, GameAssetValues.starBig)
        this.load.image(GameAssetKeys.background, GameAssetValues.background2)
    }

    loadUpdate()
    {
        this.preloadText.setText(`Loading: ${this.load.progressFloat.toPrecision(3)}%`)
    }

    create()
    {
        console.log("Load Complete")
        this.state.start(GamePlay.name)
    }
}
import { UIKeys, GameAssetValues, GameAssetKeys } from "/assets"

export class Preloader extends Phaser.State
{
    public static key = "Preloader"
    public static onCreate = new Phaser.Signal()

    public key = Preloader.key

    preloadBar: Phaser.Sprite
    preloadText: Phaser.Text

    init()
    {
        console.log("State", this.key)
        console.log("Asset Key Values")
        console.table(GameAssetValues.default)
        console.log("Asset Keys")
        console.table(GameAssetKeys)
    }

    preload()
    {
        this.preloadText = this.add.text(this.camera.bounds.centerX, this.camera.height - 100, "Loading.", { fontSize: 16, font: "Courier", wordWrap: true, wordWrapWidth: 600 })
        this.preloadText.anchor.set(0.5, 0.5)

        this.preloadBar = this.add.sprite(100, this.camera.bounds.centerY, UIKeys.preloader_bar)
        this.preloadBar.anchor.set(0, 0.5)
        this.load.setPreloadSprite(this.preloadBar)

        this.load.tilemap('level1', undefined, require('/assets/game/level1.json'), Phaser.Tilemap.TILED_JSON)

        const { dude, droid, ...images } = GameAssetValues.default
        this.load.spritesheet(GameAssetKeys.dude, dude, 32, 48)
        this.load.spritesheet(GameAssetKeys.droid, droid, 32, 32)

        this.bulkLoad(images, (key, element) => this.load.image(key, element))
    }

    bulkLoad<T extends string>(items: { [key in T]: string }, loader: (key: string, element: string) => Phaser.Loader)
    {
        for (const key in items)
        {
            if (items.hasOwnProperty(key))
            {
                const element = items[key]
                loader(key, element)
            }
        }
    }

    loadUpdate()
    {
        this.preloadText.setText(`Loading: ${this.load.progressFloat.toPrecision(3)}%`)
    }

    create()
    {
        console.log("Load Complete")
        Preloader.onCreate.dispatch()
    }
}
import 'babel-polyfill'
// Using require for global scope mounting because ES import does not guarantee load order
window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

const { Boot, Preloader, GamePlay } = require<{ [keys in any]: { new(): Phaser.State } & { key: string, onCreate: Phaser.Signal } }>("/states")

!(async () =>
{
    if (!window.GameInstance)
    {
        window.GameInstance = await startGameAsync()
    }
})()

async function startGameAsync()
{
    return await Promise.resolve(new Promise<Phaser.Device>(resolve => Phaser.Device
        .whenReady((device: Phaser.Device) => resolve(device)))
        .then((device) =>
        {
            console.log("Device Ready")
            const isOffline = location.protocol === "file:"

            const config: Phaser.IGameConfig =
            {
                renderer: device.ie || isOffline && device.chrome ? Phaser.CANVAS : Phaser.AUTO, // IE cannot play videos in WebGL. Chrome will emit CORS errors if using WebGL offline.
                parent: 'content',
                width: 800,
                height: 600,
                alignH: true,
                alignV: true,
                antialias: true,
                resolution: 1,
                maxPointers: 1,
                backgroundColor: '#EEEEEE',
                state: Boot
            }

            document.querySelector<HTMLDivElement>("#content").style.setProperty("visibility", "hidden")

            const game = new Phaser.Game(config)

            game.state.add(Preloader.key, Preloader)
            game.state.add(GamePlay.key, GamePlay)

            Boot.onCreate.addOnce(() =>
            {
                game.state.start(Preloader.key);
                document.querySelector<HTMLDivElement>("#content").style.removeProperty("visibility")
            })
            Preloader.onCreate.addOnce(() => game.state.start(GamePlay.key))

            return game
        })
    )
}

if (module.hot)
{
    module.hot.dispose(destroyGame)
    module.hot.accept(() => console.log("[HMR]", "Accept"))
}

function destroyGame()
{
    console.log("[HMR] Destroy Game")
    window.GameInstance.destroy()
    window.GameInstance = null
}
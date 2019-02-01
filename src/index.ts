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
        const game = window.GameInstance = await startGameAsync()

        game.state.add(GamePlay.key, GamePlay)

        Preloader.onCreate.addOnce(() =>
        {
            game.state.start(GamePlay.key);
        })
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

            // Walkaround to prevent canvas from appearing as black from top left corner when starting the game.
            const container = document.querySelector<HTMLDivElement>("#content")
            container.style.setProperty("visibility", "hidden")

            const game = new Phaser.Game(config)

            game.state.add(Preloader.key, Preloader)

            Boot.onCreate.addOnce(() =>
            {
                game.state.start(Preloader.key);
                container.style.removeProperty("visibility")
            })

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
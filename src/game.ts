import { Boot, Preloader, GamePlay } from "/states";

export async function startGame()
{
    return new Promise<Phaser.Game>(resolve =>
    {
        Phaser.Device.whenReady((device: Phaser.Device) =>
        {
            console.log("Device Ready")
            const isOffline = location.protocol === "file:"

            const config: Phaser.IGameConfig =
            {
                renderer: device.ie || isOffline && device.chrome ? Phaser.CANVAS : Phaser.AUTO,
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
            };

            //document.querySelector<HTMLDivElement>("#content").style.setProperty("visibility", "hidden")

            const game = new Phaser.Game(config);
            game.state.add(Preloader.name, Preloader)
            game.state.add(GamePlay.name, GamePlay)

            resolve(game)
        })
    })
}



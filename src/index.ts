import 'babel-polyfill'
import { HoistGlobalScopesAsync } from './global'

(async () =>
{
    await HoistGlobalScopesAsync()
    if (!window.GameInstance)
    {
        const gameStarter = await import('/game')
        window.GameInstance = await gameStarter.startGame()
    }
})()

if (module.hot)
{
    module.hot.dispose(destroyGame);
    module.hot.accept(() => console.log("[HMR]", "Accept"));
}

function destroyGame()
{
    console.log("[HMR] Destroy Game")
    window.GameInstance.destroy()
    window.GameInstance = null
}
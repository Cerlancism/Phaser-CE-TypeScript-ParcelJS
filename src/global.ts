export async function HoistGlobalScopesAsync()
{
    window.PIXI = await import('phaser-ce/build/custom/pixi')
    window.p2 = await import('phaser-ce/build/custom/p2')
    window.Phaser = await import('phaser-ce/build/custom/phaser-split')
}
import * as UI from './ui/*.png'
import * as Game from './game/*.png'

type StringKeyValuePair<T extends string> = { [key in T]: string } & { default: { [key in T]: string } }

type UIKeyStore =
    | 'preloader_bar'

type UIKeyValuePair = StringKeyValuePair<UIKeyStore>

type GameAssetKeyStore =
    | 'background'
    | 'background2'
    | 'droid'
    | 'dude'
    | 'starSmall'
    | 'starBig'
    | 'tiles-1'

type GameAssetKeyValuePair = StringKeyValuePair<GameAssetKeyStore>

export const UIKeyValues = UI as UIKeyValuePair
export const UIKeys = getKeys<UIKeyValuePair>(UI)
export const GameAssetValues = Game as GameAssetKeyValuePair
export const GameAssetKeys = getKeys<GameAssetKeyValuePair>(Game)

function getKeys<T extends StringKeyValuePair<string>>(files: T): T
{
    let keys: T = {} as T
    for (const key in files)
    {
        if (files.hasOwnProperty(key))
        {
            keys[key as string] = key
        }
    }
    return keys
}








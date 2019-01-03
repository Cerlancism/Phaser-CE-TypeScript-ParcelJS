import * as UI from './ui/*.png'
import * as Game from './game/*.png'

type UIKeyStore =
    | 'preloader_bar'

type UIKeyValuePair =
    {
        [key in UIKeyStore]: string
    }

type GameAssetKeyStore =
    | 'background'
    | 'background2'
    | 'droid'
    | 'dude'
    | 'starSmall'
    | 'starBig'
    | 'tiles-1'

type GameAssetKeyValuePair =
    {
        [key in GameAssetKeyStore]: string
    }

const UIKeyValues = UI as UIKeyValuePair
const UIKeys = getKeys<UIKeyValuePair>(UI)
const GameAssetValues = Game as GameAssetKeyValuePair
const GameAssetKeys = getKeys<GameAssetKeyValuePair>(Game)

function getKeys<T>(files: Object): T
{
    let keys: T = {} as T
    for (const key in files)
    {
        if (files.hasOwnProperty(key))
        {
            keys[key] = key
        }
    }
    return keys
}

export { UIKeyValues, UIKeys, GameAssetValues, GameAssetKeys }








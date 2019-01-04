# Phaser CE TypeScript ParcelJS

<div align="center">
<img style="border-radius:8px" src="https://raw.githubusercontent.com/Cerlancism/Phaser-CE-TypeScript-ParcelJS/master/Banner.png" width="640" alt="Banner" />
</div>

### Try out here
<https://cerlancism.github.io/Phaser-CE-TypeScript-ParcelJS/build/>

## Features
- Using Parcel bundler as a seamless and lightweight build system.  
    - Bulk import assets using glob file patterns.
    - Hot Module Replacement (fast game reload in browser during development)
    - Minification for build
    - Source Mapping
- Use modern ECMA syntax as well as typings/intelliSense support from TypeScript.
- Backwards compatible up to Internet Explorer 9 with Babel transformations and polyfill.
- Build output is offline playable.

## Installation
- Recommended Editor: Visual Studio Code
- NodeJS

## Set Up
Clone this repository.

Open this folder in VS code and go to `Terminal -> New Terminal`

To develop: `npm start`  (creates `dev` folder)

To build(minify and offline play): `npm run build` (creates `build` folder)

To deploy(build with no source map): `npm run deploy` (creates `.deploy` folder)

## Important Note
Due to the bundling and limitation of mounting of Phaser to window scope, do not use destructuring ES module imports from Phaser, for example
``` ts
// Don't use ES Modules for Phaser
import { Game, IGameConfig } from 'phaser-ce'
// But you can do this for your own modules.
import { Logger } from '/utilites'

const config: IGameConfig = { /* Configs */ }
const game = new Game(config)
```
This will cause the build size to bloat as Phaser will be included twice.  
Do use Phaser as namespace:
``` ts
const config: Phaser.IGameConfig = { /* Configs */ }
const game = new Phaser.Game(config)
```

## Credits
- Example game and assets from [Phaser 2 Examples](https://github.com/photonstorm/phaser-examples)
- [Phaser3 TypeScript Webpack](https://github.com/troyedwardsjr/phaser3-typescript-webpack)
- [Phaser 3 with Parcel](https://github.com/samme/phaser-parcel)
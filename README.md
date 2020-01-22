# Phaser CE TypeScript ParcelJS

<div align="center">
<img src="https://raw.githubusercontent.com/Cerlancism/Phaser-CE-TypeScript-ParcelJS/master/Banner.png" width="640" alt="Banner" />
</div>

[Phaser CE](https://github.com/photonstorm/phaser-ce) boilerplate.

### Try out here
<https://cerlancism.github.io/Phaser-CE-TypeScript-ParcelJS/build/>

## Features
- Using [Parcel bundler](https://parceljs.org/) as a seamless and lightweight build tool.  
    - Bulk import assets using glob file patterns.
    - Hot Module Replacement (fast game reload in browser during development)
    - Minification for build output
    - Source mapping (TypeScript breakpoints works with VS Code [Chrome Debugging Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)).
- Supports modern ECMA syntax as well as typings/intelliSense from [TypeScript](http://www.typescriptlang.org/).
- Browser compatibility down to Internet Explorer 9 with [Babel](https://babeljs.io/) transformations and [core-js](https://github.com/zloirock/core-js) polyfills.
- The build output is playable offline.

## Installation
- Recommended editor: [Visual Studio Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/)
- (Optional) In command-line: 
    - `npm install -g typescript`
    - `npm install -g parcel-bundler`

## Set Up
Clone this repository.

Open this folder in Visual Studio code and from menu:  
`Terminal -> New Terminal`

`npm install` Download tools and dependencies (one time) 

`npm start` To develop (work in `src` folder, creates `dev` folder, open in browser <http://localhost:1234>)

`npm run build` To build (minified and playable offline, creates `build` folder)

## Important Note
Due to bundling and limitation of mounting Phaser to window scope, do not import Phaser as destructured ES modules (becareful as this is suggested by auto import), for example:  
``` ts
// You can use ES Modules for your own modules.
import { Logger } from '/utilities'
// But do not use ES Modules for Phaser.
import { Game, IGameConfig } from 'phaser-ce'

const config: IGameConfig = { /* Configs */ }
const game = new Game(config)

Logger.log("Game Created")
```
This will cause the build size to bloat as Phaser will be included twice.
To prevent this, use Phaser only as namepace:

``` ts
import { Logger } from '/utilities'

// Do use Phaser only as namepace.
const config: Phaser.IGameConfig = { /* Configs */ }
const game = new Phaser.Game(config)

Logger.log("Game Created")
```

## Credits
- Example game and assets from [Phaser 2 Examples](https://github.com/photonstorm/phaser-examples)
- [Phaser 3 TypeScript Webpack](https://github.com/troyedwardsjr/phaser3-typescript-webpack)
- [Phaser 3 with Parcel](https://github.com/samme/phaser-parcel)

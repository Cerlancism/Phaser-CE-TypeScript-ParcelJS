// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"0TTD":[function(require,module,exports) {
module.exports = "preloader_bar.aeb07a9b.png";
},{}],"esTc":[function(require,module,exports) {
module.exports = {
  "preloader_bar": require("./preloader_bar.png")
};
},{"./preloader_bar.png":"0TTD"}],"hws2":[function(require,module,exports) {
module.exports = "background.b4aabffb.png";
},{}],"P4CS":[function(require,module,exports) {
module.exports = "background2.dc49bd82.png";
},{}],"p8ku":[function(require,module,exports) {
module.exports = "droid.a72c73f1.png";
},{}],"12Q4":[function(require,module,exports) {
module.exports = "dude.9a876c2b.png";
},{}],"q/9S":[function(require,module,exports) {
module.exports = "starBig.4173ac4c.png";
},{}],"nYsx":[function(require,module,exports) {
module.exports = "starSmall.0fd40b4b.png";
},{}],"KwJu":[function(require,module,exports) {
module.exports = "tiles-1.c888183d.png";
},{}],"wwGw":[function(require,module,exports) {
module.exports = {
  "background": require("./background.png"),
  "background2": require("./background2.png"),
  "droid": require("./droid.png"),
  "dude": require("./dude.png"),
  "starBig": require("./starBig.png"),
  "starSmall": require("./starSmall.png"),
  "tiles-1": require("./tiles-1.png")
};
},{"./background.png":"hws2","./background2.png":"P4CS","./droid.png":"p8ku","./dude.png":"12Q4","./starBig.png":"q/9S","./starSmall.png":"nYsx","./tiles-1.png":"KwJu"}],"QWTf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameAssetKeys = exports.GameAssetValues = exports.UIKeys = exports.UIKeyValues = void 0;

var UI = _interopRequireWildcard(require("./ui/*.png"));

var Game = _interopRequireWildcard(require("./game/*.png"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var UIKeyValues = UI;
exports.UIKeyValues = UIKeyValues;
var UIKeys = getKeys(UI);
exports.UIKeys = UIKeys;
var GameAssetValues = Game;
exports.GameAssetValues = GameAssetValues;
var GameAssetKeys = getKeys(Game);
exports.GameAssetKeys = GameAssetKeys;

function getKeys(files) {
  var keys = {};

  for (var key in files) {
    if (files.hasOwnProperty(key)) {
      keys[key] = key;
    }
  }

  return keys;
}
},{"./ui/*.png":"esTc","./game/*.png":"wwGw"}],"Su9K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GamePlay = void 0;

var _assets = require("/assets");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GamePlay =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(GamePlay, _Phaser$State);

  function GamePlay() {
    var _this;

    _classCallCheck(this, GamePlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GamePlay).apply(this, arguments));
    _this.facing = 'left';
    _this.jumpTimer = 0;
    return _this;
  }

  _createClass(GamePlay, [{
    key: "init",
    value: function init() {
      console.log("State", this.key);
    }
  }, {
    key: "create",
    value: function create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.stage.backgroundColor = '#000000';
      this.bg = this.game.add.tileSprite(0, 0, 800, 600, _assets.GameAssetKeys.background);
      this.bg.fixedToCamera = true;
      this.map = this.game.add.tilemap('level1');
      this.map.addTilesetImage(_assets.GameAssetKeys["tiles-1"]);
      this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
      this.layer = this.map.createLayer('Tile Layer 1'); //  Un-comment this on to see the collision tiles
      // layer.debug = true;

      this.layer.resizeWorld();
      this.game.physics.arcade.gravity.y = 250;
      this.player = this.game.add.sprite(32, 32, _assets.GameAssetKeys.dude);
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
      this.player.body.bounce.y = 0.2;
      this.player.body.collideWorldBounds = true;
      this.player.body.setSize(20, 32, 5, 16);
      this.player.animations.add('left', [0, 1, 2, 3], 10, true);
      this.player.animations.add('turn', [4], 20, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);
      this.game.camera.follow(this.player);
      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
  }, {
    key: "update",
    value: function update() {
      var game = this.game,
          player = this.player,
          cursors = this.cursors,
          jumpButton = this.jumpButton,
          layer = this.layer;
      game.physics.arcade.collide(player, layer);
      player.body.velocity.x = 0;

      if (cursors.left.isDown) {
        player.body.velocity.x = -150;

        if (this.facing != 'left') {
          player.animations.play('left');
          this.facing = 'left';
        }
      } else if (cursors.right.isDown) {
        player.body.velocity.x = 150;

        if (this.facing != 'right') {
          player.animations.play('right');
          this.facing = 'right';
        }
      } else {
        if (this.facing != "idle") {
          player.animations.stop();

          if (this.facing == 'left') {
            player.frame = 0;
          } else {
            player.frame = 5;
          }

          this.facing = 'idle';
        }
      }

      if (jumpButton.isDown && player.body.onFloor() && game.time.now > this.jumpTimer) {
        player.body.velocity.y = -250;
        this.jumpTimer = game.time.now + 750;
      }
    }
  }, {
    key: "render",
    value: function render() {// game.debug.text(game.time.physicsElapsed, 32, 32);
      // game.debug.body(player);
      // game.debug.bodyInfo(player, 16, 24);
    }
  }]);

  return GamePlay;
}(Phaser.State);

exports.GamePlay = GamePlay;
},{"/assets":"QWTf"}],"9Y3r":[function(require,module,exports) {
module.exports = {
  "height": 64,
  "layers": [{
    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 53, 53, 19, 19, 36, 19, 19, 37, 19, 36, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 54, 57, 19, 19, 36, 36, 19, 20, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 19, 19, 37, 38, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 54, 19, 36, 19, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 19, 19, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 20, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 19, 21, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 38, 21, 19, 50, 0, 49, 0, 0, 0, 49, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 49, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 53, 19, 19, 22, 67, 3, 66, 5, 2, 6, 66, 67, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 64, 65, 5, 2, 6, 66, 67, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 19, 39, 19, 19, 37, 19, 19, 36, 19, 22, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 37, 19, 19, 36, 19, 22, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 0, 0, 0, 0, 52, 19, 19, 36, 19, 19, 21, 19, 19, 39, 40, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 36, 19, 19, 38, 19, 19, 39, 40, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 19, 41, 0, 0, 0, 0, 0, 25, 53, 54, 53, 53, 55, 53, 54, 55, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 53, 54, 53, 53, 55, 53, 54, 55, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 57, 53, 60, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 6, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 54, 55, 57, 58, 0, 0, 0, 0, 0, 0, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 19, 41, 0, 0, 0, 0, 0, 0, 0, 50, 8, 19, 6, 2, 3, 6, 7, 0, 0, 0, 0, 0, 0, 13, 14, 0, 0, 0, 0, 0, 0, 13, 14, 0, 0, 0, 0, 1, 34, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 57, 53, 60, 0, 0, 0, 0, 0, 0, 1, 67, 19, 19, 36, 19, 22, 23, 24, 0, 0, 0, 0, 0, 1, 30, 31, 9, 0, 0, 0, 0, 1, 30, 31, 9, 0, 0, 0, 59, 55, 57, 60, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 19, 19, 39, 40, 41, 0, 0, 0, 0, 0, 25, 19, 19, 26, 0, 0, 0, 0, 25, 19, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 64, 65, 9, 0, 0, 0, 0, 0, 46, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 19, 20, 54, 55, 57, 60, 0, 0, 0, 0, 0, 59, 57, 53, 60, 0, 0, 0, 0, 59, 57, 53, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 56, 60, 0, 0, 0, 0, 1, 5, 19, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 57, 54, 53, 19, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 53, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 19, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 58, 0, 0, 0, 0, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 43, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 31, 31, 31, 9, 17, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 9, 0, 0, 0, 1, 4, 64, 65, 2, 3, 4, 5, 2, 64, 65, 3, 6, 7, 0, 1, 2, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 19, 36, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 25, 19, 26, 0, 0, 0, 18, 19, 19, 19, 19, 19, 37, 19, 19, 36, 19, 22, 23, 24, 0, 18, 19, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 19, 43, 0, 0, 0, 25, 19, 19, 19, 19, 36, 19, 19, 19, 19, 19, 39, 40, 41, 0, 18, 19, 19, 19, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 19, 41, 0, 0, 0, 42, 19, 19, 19, 53, 54, 53, 53, 55, 53, 54, 55, 57, 60, 0, 59, 56, 56, 56, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 43, 0, 0, 0, 18, 19, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 19, 19, 19, 26, 0, 0, 0, 35, 19, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 66, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 53, 54, 19, 37, 26, 0, 0, 0, 52, 56, 56, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 2, 30, 30, 31, 2, 6, 7, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 57, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0, 25, 19, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 20, 21, 22, 23, 19, 19, 19, 19, 19, 19, 19, 6, 3, 30, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 41, 0, 49, 50, 51, 0, 47, 48, 0, 0, 0, 1, 36, 37, 38, 39, 40, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 19, 3, 66, 67, 68, 2, 64, 65, 6, 2, 3, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 57, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 20, 19, 19, 19, 19, 19, 37, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 0, 0, 1, 9, 0, 0, 0, 0, 18, 37, 19, 19, 19, 19, 19, 20, 19, 19, 38, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 30, 9, 0, 0, 0, 0, 0, 0, 0, 52, 58, 0, 0, 0, 0, 0, 1, 2, 19, 41, 0, 0, 0, 0, 35, 19, 19, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 53, 56, 58, 0, 0, 0, 0, 18, 19, 38, 19, 19, 19, 19, 56, 56, 56, 19, 19, 19, 19, 56, 56, 56, 54, 56, 56, 53, 56, 56, 54, 56, 60, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 19, 19, 19, 19, 19, 19, 19, 9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 19, 19, 19, 56, 56, 60, 0, 0, 0, 18, 19, 57, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 56, 60, 0, 0, 0, 0, 0, 0, 35, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 19, 19, 19, 19, 19, 56, 56, 56, 56, 56, 19, 3, 4, 4, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 43, 0, 0, 0, 0, 0, 0, 0, 0, 52, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 19, 19, 19, 19, 19, 19, 60, 0, 0, 0, 0, 0, 35, 19, 37, 38, 19, 19, 19, 41, 0, 0, 0, 0, 0, 1, 9, 0, 0, 0, 0, 0, 35, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 1, 4, 4, 4, 19, 22, 23, 19, 19, 19, 19, 56, 56, 60, 0, 0, 0, 0, 0, 0, 52, 55, 54, 53, 54, 57, 54, 58, 0, 0, 0, 0, 1, 19, 19, 9, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 30, 4, 4, 4, 19, 19, 19, 19, 19, 39, 40, 19, 19, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 58, 0, 0, 0, 0, 1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 19, 19, 19, 19, 19, 56, 56, 53, 56, 56, 56, 56, 53, 56, 56, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 56, 56, 56, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 42, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 9, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 9, 0, 0, 0, 0, 0, 0, 0, 1, 34, 19, 19, 19, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 19, 24, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 58, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 19, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 4, 5, 5, 6, 5, 2, 4, 5, 6, 4, 2, 6, 4, 7, 0, 0, 0, 0, 0, 0, 1, 5, 19, 19, 19, 41, 0, 0, 0, 0, 0, 52, 56, 56, 56, 58, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 21, 36, 19, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 57, 53, 53, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 24, 0, 0, 0, 0, 0, 0, 52, 19, 19, 19, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 19, 19, 19, 36, 38, 19, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 57, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 5, 9, 0, 0, 0, 0, 0, 35, 19, 19, 19, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 19, 19, 19, 19, 19, 19, 41, 0, 0, 0, 0, 0, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 19, 19, 19, 19, 19, 54, 53, 53, 54, 55, 55, 58, 0, 0, 0, 0, 0, 52, 56, 56, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 19, 21, 19, 19, 20, 37, 19, 19, 26, 0, 0, 0, 0, 0, 52, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 54, 53, 53, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19, 19, 20, 19, 19, 38, 19, 19, 19, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 35, 19, 19, 20, 36, 19, 19, 20, 19, 19, 19, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 6, 7, 0, 0, 0, 1, 64, 7, 0, 1, 19, 19, 37, 22, 23, 37, 19, 19, 22, 19, 19, 19, 41, 0, 0, 0, 47, 48, 0, 47, 48, 0, 47, 48, 0, 1, 5, 19, 43, 0, 13, 14, 14, 13, 14, 14, 0, 0, 0, 0, 1, 5, 34, 9, 0, 0, 49, 49, 50, 0, 0, 1, 19, 19, 19, 19, 9, 0, 1, 19, 19, 19, 6, 19, 19, 38, 19, 39, 40, 19, 19, 19, 39, 19, 19, 19, 19, 5, 5, 5, 64, 65, 5, 64, 65, 5, 64, 65, 5, 19, 19, 19, 19, 2, 30, 31, 31, 30, 31, 31, 5, 2, 3, 2, 21, 22, 23, 19, 5, 5, 66, 66, 67, 5, 5, 19, 19, 19, 19, 19, 19, 6, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
    "height": 64,
    "name": "Tile Layer 1",
    "opacity": 1,
    "type": "tilelayer",
    "visible": true,
    "width": 64,
    "x": 0,
    "y": 0
  }],
  "orientation": "orthogonal",
  "properties": {},
  "tileheight": 16,
  "tilesets": [{
    "firstgid": 1,
    "image": "tiles-1.png",
    "imageheight": 64,
    "imagewidth": 272,
    "margin": 0,
    "name": "tiles-1",
    "properties": {},
    "spacing": 0,
    "tileheight": 16,
    "tilewidth": 16
  }],
  "tilewidth": 16,
  "version": 1,
  "width": 64
};
},{}],"8ww0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preloader = void 0;

var _assets = require("/assets");

var _GamePlay = require("./GamePlay");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Preloader =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Preloader, _Phaser$State);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preloader).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: "init",
    value: function init() {
      console.log("State", this.key);
      console.log("KeyValues", _assets.GameAssetValues, "Keys", _assets.GameAssetKeys);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.preloadText = this.add.text(this.camera.bounds.centerX, this.camera.height - 100, "Loading.", {
        fontSize: 16,
        font: "Courier New",
        wordWrap: true,
        wordWrapWidth: 600
      });
      this.preloadText.anchor.set(0.5, 0.5);
      this.preloadBar = this.add.sprite(100, this.camera.bounds.centerY, _assets.UIKeys.preloader_bar);
      this.preloadBar.anchor.set(0, 0.5);
      this.load.setPreloadSprite(this.preloadBar);
      this.load.tilemap('level1', undefined, require('/assets/game/level1.json'), Phaser.Tilemap.TILED_JSON);
      this.load.image(_assets.GameAssetKeys["tiles-1"], _assets.GameAssetValues["tiles-1"]);
      this.load.spritesheet(_assets.GameAssetKeys.dude, _assets.GameAssetValues.dude, 32, 48);
      this.load.spritesheet(_assets.GameAssetKeys.droid, _assets.GameAssetValues.droid, 32, 32);
      this.load.image(_assets.GameAssetKeys.starSmall, _assets.GameAssetValues.starSmall);
      this.load.image(_assets.GameAssetKeys.starBig, _assets.GameAssetValues.starBig);
      this.load.image(_assets.GameAssetKeys.background, _assets.GameAssetValues.background2);
    }
  }, {
    key: "loadUpdate",
    value: function loadUpdate() {
      this.preloadText.setText("Loading: ".concat(this.load.progressFloat.toPrecision(3), "%"));
    }
  }, {
    key: "create",
    value: function create() {
      console.log("Load Complete");
      this.state.start(_GamePlay.GamePlay.name);
    }
  }]);

  return Preloader;
}(Phaser.State);

exports.Preloader = Preloader;
},{"/assets":"QWTf","./GamePlay":"Su9K","/assets/game/level1.json":"9Y3r"}],"IDeO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boot = void 0;

var _assets = require("/assets");

var _Preloader = require("./Preloader");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Boot =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, _getPrototypeOf(Boot).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: "init",
    value: function init() {
      console.log("State", this.key);
      this.input.maxPointers = 1;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(320, 240, 1280, 960); // Disable generic right click menu.

      this.game.canvas.addEventListener('contextmenu', function (event) {
        return event.preventDefault();
      });
      this.game.stage.disableVisibilityChange = true;
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image(_assets.UIKeys.preloader_bar, _assets.UIKeyValues.preloader_bar);
    }
  }, {
    key: "create",
    value: function create() {
      this.game.canvas.parentElement.style.removeProperty("visibility");
      this.state.start(_Preloader.Preloader.name);
    }
  }]);

  return Boot;
}(Phaser.State);

exports.Boot = Boot;
},{"/assets":"QWTf","./Preloader":"8ww0"}],"6QGL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Boot", {
  enumerable: true,
  get: function () {
    return _Boot.Boot;
  }
});
Object.defineProperty(exports, "Preloader", {
  enumerable: true,
  get: function () {
    return _Preloader.Preloader;
  }
});
Object.defineProperty(exports, "GamePlay", {
  enumerable: true,
  get: function () {
    return _GamePlay.GamePlay;
  }
});

var _Boot = require("/states/Boot");

var _Preloader = require("/states/Preloader");

var _GamePlay = require("/states/GamePlay");
},{"/states/Boot":"IDeO","/states/Preloader":"8ww0","/states/GamePlay":"Su9K"}],"MYCW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startGame = startGame;

var _states = require("/states");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function startGame() {
  return _startGame.apply(this, arguments);
}

function _startGame() {
  _startGame = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              Phaser.Device.whenReady(function (device) {
                console.log("Device Ready");
                var isOffline = location.protocol === "file:";
                var config = {
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
                  state: _states.Boot
                }; //document.querySelector<HTMLDivElement>("#content").style.setProperty("visibility", "hidden")

                var game = new Phaser.Game(config);
                game.state.add(_states.Preloader.name, _states.Preloader);
                game.state.add(_states.GamePlay.name, _states.GamePlay);
                resolve(game);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _startGame.apply(this, arguments);
}
},{"/states":"6QGL"}]},{},["MYCW"], null)
//# sourceMappingURL=game.1401d58f.map
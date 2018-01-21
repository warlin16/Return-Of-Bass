/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 700;
    this.player = new _player2.default(this.canvas);
    this.blocks = [];
    this.makeBlocks();
  }

  _createClass(Game, [{
    key: 'makeBlocks',
    value: function makeBlocks() {
      // => main platform
      this.blocks.push(new _block2.default(0, 675, 900, 50, this.canvas));
      // => Boss platform
      this.blocks.push(new _block2.default(600, 120, 450, 5, this.canvas));
      // => Platform above player
      this.blocks.push(new _block2.default(0, 580, 20, 8, this.canvas));
      this.blocks.push(new _block2.default(150, 580, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(210, 550, 2, 40, this.canvas));
      this.blocks.push(new _block2.default(250, 580, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(350, 580, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(450, 580, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(550, 580, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(620, 610, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(657, 530, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(720, 620, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(850, 650, 55, 30, this.canvas));
      // => Second platform
      this.blocks.push(new _block2.default(800, 495, 100, 8, this.canvas));
      this.blocks.push(new _block2.default(750, 530, 40, 8, this.canvas));
      this.blocks.push(new _block2.default(845, 465, 50, 14, this.canvas));
      this.blocks.push(new _block2.default(750, 425, 40, 8, this.canvas));
      this.blocks.push(new _block2.default(855, 385, 40, 8, this.canvas));
      // => Third platform
      this.blocks.push(new _block2.default(700, 355, 75, 8, this.canvas));
      this.blocks.push(new _block2.default(600, 355, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(500, 355, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(400, 355, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(300, 355, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(200, 355, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(100, 355, 30, 8, this.canvas));
      // => Fourth Platform
      this.blocks.push(new _block2.default(0, 320, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(70, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(170, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(270, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(370, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(470, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(570, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(670, 260, 30, 8, this.canvas));
      this.blocks.push(new _block2.default(730, 230, 2, 40, this.canvas));
      this.blocks.push(new _block2.default(770, 260, 30, 8, this.canvas));
    }
  }, {
    key: 'renderBlocks',
    value: function renderBlocks() {
      var _this = this;

      this.blocks.forEach(function (block) {
        block.render();
        _this.player.isColliding(block);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.render();
      this.renderBlocks();
      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Game;
}();

document.addEventListener('DOMContentLoaded', function () {
  var game = new Game();
  game.render();

  document.addEventListener('keydown', function (e) {
    game.player.keysPressed[e.code] = true;
  });

  document.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowUp') {
      game.player.keysPressed[e.code] = true;
    } else {
      game.player.keysPressed[e.code] = false;
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = __webpack_require__(2);

var _sprite2 = _interopRequireDefault(_sprite);

var _bass = __webpack_require__(3);

var _bass2 = _interopRequireDefault(_bass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(stage) {
    _classCallCheck(this, Player);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 650;
    this.width = 35;
    this.height = 45;
    this.speed = 4.5;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.gravity = 0.8;
    this.slide = 0.8;
    this.keysPressed = {};
    this.animation = new _bass2.default().animation;
    this.currImg = this.animation.idleAnim;
    this.frames = 0;
    this.direction = 'right';
    this.isColliding = this.isColliding.bind(this);
  }

  _createClass(Player, [{
    key: 'changeDirection',
    value: function changeDirection() {
      if (this.keysPressed.Comma) {
        this.direction = 'left';
      }
      if (this.keysPressed.Period) {
        this.direction = 'right';
      }
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      if (this.keysPressed.ArrowRight) {
        if (this.velX < this.speed) this.velX++;
        if (this.frames === 1) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim1;
          }
        }
        if (this.frames === 17) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim3;
          }
        }
        if (this.frames === 27) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim2;
          }
        }
      }
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      if (this.keysPressed.ArrowLeft && !this.keysPressed.ArrowRight) {
        if (this.velX > -this.speed) this.velX--;
        if (this.frames === 1) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim1;
          }
        }
        if (this.frames === 17) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim3;
          }
        }
        if (this.frames === 27) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim2;
          }
        }
      }
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (this.keysPressed.ArrowUp) {
        if (this.grounded) {
          this.jumping = true;
          this.velY = -(this.speed * 2);
          this.grounded = false;
        }
        if (this.jumping) {
          if (this.frames === 1) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim1;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim1;
            }
          }
          if (this.frames === 5) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim2;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim2;
            }
          }
          if (this.frames === 10) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim3;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim3;
            }
          }
        }
      }
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      if (this.keysPressed.Space) {
        if (this.frames === 2) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim1;
          }
        }
        if (this.frames === 5) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim2;
          }
        }
        if (this.frames === 13) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim3;
          }
        }
        if (this.frames === 20) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim4;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim4;
          }
        }
        if (this.frames === 35) this.frames = 0;
      }
    }
  }, {
    key: 'slash',
    value: function slash() {
      if (this.keysPressed.Slash) {
        if (this.frames === 2) {
          this.currImg = this.animation.jumpAnim1;
        }
        if (this.frames === 8) {
          this.currImg = this.animation.slashAnim1;
        }
        if (this.frames === 12) {
          this.currImg = this.animation.slashAnim2;
        }
        if (this.frames === 15) {
          this.currImg = this.animation.slashAnim3;
        }
        if (this.frames === 18) {
          this.currImg = this.animation.slashAnim4;
        }
        if (this.frames === 21) {
          this.currImg = this.animation.slashAnim5;
        }
        if (this.frames === 24) {
          this.currImg = this.animation.slashAnim6;
        }
        if (this.frames === 27) {
          this.currImg = this.animation.jumpAnim1;
        }
        if (this.frames === 30) this.frames = 0;
      }
    }
  }, {
    key: 'idle',
    value: function idle() {
      if (!this.keysPressed.ArrowRight && !this.keysPressed.ArrowLeft && !this.keysPressed.ArrowUp && !this.keysPressed.Space && !this.keysPressed.Slash) {
        this.frames = 0;
        if (this.direction === 'right') {
          this.currImg = this.animation.idleAnim;
        }
        if (this.direction === 'left') {
          this.currImg = this.animation.leftIdleAnim;
        }
      }
    }
  }, {
    key: 'animate',
    value: function animate() {
      this.frames++;
      this.changeDirection();
      this.moveRight();
      this.moveLeft();
      this.jump();
      this.shoot();
      this.slash();
      this.idle();
      this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY, this.currImg.sWidth, this.currImg.sHeight, this.x, this.y, this.width, this.height);
    }
  }, {
    key: 'renderFace',
    value: function renderFace() {
      this.ctx.drawImage(this.animation.face.img, this.animation.face.sX, this.animation.face.sY, this.animation.face.sWidth, this.animation.face.sHeight, 0, 0, 50, 50);
    }
  }, {
    key: 'physics',
    value: function physics() {
      if (this.x + this.width > this.stage.width) {
        this.x = this.stage.width - this.width;
      }
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.velY = 0;
        this.y = 0;
      }

      if (!this.grounded) this.velY += this.gravity;

      this.velX *= this.slide;
      this.x += this.velX;
      this.y += this.velY;
      this.renderFace();
      this.animate();
    }
  }, {
    key: 'isColliding',
    value: function isColliding(obj) {
      // if (this.x < obj.x + obj.width &&
      // this.x + this.width > obj.x &&
      // this.y < obj.y + obj.height &&
      // this.height + this.y > obj.y) {
      //   this.velX -= 1;
      // }

      if (this.y < obj.y + obj.height && this.y + this.height > obj.y && this.x < obj.x + obj.width && this.width + this.x > obj.x) {
        if (this.velY > 0) {
          this.y = obj.y - this.height;
          this.grounded = true;
        } else if (this.velY < 0) {
          this.y = obj.y + obj.height;
          this.grounded = false;
        }
        if (this.velX > 0) {
          this.x -= 1;
        } else if (this.velX < 0) {
          this.x += 1;
        }
        this.frames = 0;
        this.velY = 0;
        this.keysPressed.ArrowUp = false;
        console.log('Im colliding bro on the y');
      } else {
        // this.grounded = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.physics();
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharImg = function CharImg(img, sX, sY, sWidth, sHeight, width, height) {
  _classCallCheck(this, CharImg);

  this.img = img;
  this.sX = sX;
  this.sY = sY;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.width = width;
  this.height = height;
};

exports.default = CharImg;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sprite = __webpack_require__(2);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bass = function Bass() {
  _classCallCheck(this, Bass);

  this.bass = new Image();
  this.bass.src = 'assets/bass.png';
  this.bassSword = new Image();
  this.bassSword.src = 'assets/bass_sword.png';
  this.bassLeft = new Image();
  this.bassLeft.src = 'assets/bass_left.png';
  this.bassFace = new Image();
  this.bassFace.src = 'assets/bass-face.png';
  this.animation = {
    idleAnim: new _sprite2.default(this.bass, 0, 0, 50, 58),
    leftAnim1: new _sprite2.default(this.bass, 302, 130, 50, 58),
    leftAnim2: new _sprite2.default(this.bass, 245, 130, 50, 58),
    leftAnim3: new _sprite2.default(this.bass, 188, 130, 50, 58),
    rightAnim1: new _sprite2.default(this.bass, 0, 130, 50, 58),
    rightAnim2: new _sprite2.default(this.bass, 60, 130, 50, 58),
    rightAnim3: new _sprite2.default(this.bass, 120, 130, 50, 58),
    jumpAnim1: new _sprite2.default(this.bass, 180, 65, 50, 58),
    jumpAnim2: new _sprite2.default(this.bass, 120, 65, 50, 58),
    jumpAnim3: new _sprite2.default(this.bass, 60, 65, 50, 58),
    shootAnim1: new _sprite2.default(this.bass, 180, 246, 50, 58),
    shootAnim2: new _sprite2.default(this.bass, 180, 495, 50, 58),
    shootAnim3: new _sprite2.default(this.bass, 120, 495, 50, 58),
    shootAnim4: new _sprite2.default(this.bass, 120, 435, 50, 58),
    leftIdleAnim: new _sprite2.default(this.bassLeft, 300, 0, 50, 58),
    leftMoveAnim1: new _sprite2.default(this.bassLeft, 302, 130, 50, 58),
    leftMoveAnim2: new _sprite2.default(this.bassLeft, 245, 130, 50, 58),
    leftMoveAnim3: new _sprite2.default(this.bassLeft, 188, 130, 50, 58),
    rightMoveAnim1: new _sprite2.default(this.bassLeft, 0, 130, 50, 58),
    rightMoveAnim2: new _sprite2.default(this.bassLeft, 60, 130, 50, 58),
    rightMoveAnim3: new _sprite2.default(this.bassLeft, 120, 130, 50, 58),
    leftJumpAnim1: new _sprite2.default(this.bassLeft, 120, 65, 50, 58),
    leftJumpAnim2: new _sprite2.default(this.bassLeft, 180, 65, 50, 58),
    leftJumpAnim3: new _sprite2.default(this.bassLeft, 240, 65, 50, 58),
    leftShootAnim1: new _sprite2.default(this.bassLeft, 120, 246, 50, 58),
    leftShootAnim2: new _sprite2.default(this.bassLeft, 120, 495, 50, 58),
    leftShootAnim3: new _sprite2.default(this.bassLeft, 240, 495, 50, 58),
    leftShootAnim4: new _sprite2.default(this.bassLeft, 240, 435, 50, 58),
    slashAnim1: new _sprite2.default(this.bassSword, 0, 149, 57, 58),
    slashAnim2: new _sprite2.default(this.bassSword, 59, 149, 57, 58),
    slashAnim3: new _sprite2.default(this.bassSword, 115, 149, 59, 58),
    slashAnim4: new _sprite2.default(this.bassSword, 200, 149, 68, 58),
    slashAnim5: new _sprite2.default(this.bassSword, 270, 149, 68, 58),
    slashAnim6: new _sprite2.default(this.bassSword, 342, 149, 57, 58),
    face: new _sprite2.default(this.bassFace, 0, 0, 50, 50)
  };
};

exports.default = Bass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(x, y, width, height, stage) {
    _classCallCheck(this, Block);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Block, [{
    key: 'render',
    value: function render() {
      this.ctx.fillStyle = 'cadetblue';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
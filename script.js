/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Game/Classes/Animal.js":
/*!********************************!*\
  !*** ./Game/Classes/Animal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animal)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configurations */ "./Game/configurations.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./Game/Classes/Vector.js");



class Animal extends _Vector__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(sid, type, x, y) {
        super({x: 0, y: 0});

        this.id = sid;
        
        this.type = type;
        this.data = _configurations__WEBPACK_IMPORTED_MODULE_0__.animalTypes[type];

        this.img = this.data.img;
        this.health = this.data.health;
        this.dir = 0;
        this.name = this.data.name;
        this.weight = this.data.weight;
        this.turnSpeed = this.data.turnSpeed;
        this.drop = this.data.drop;

        this.name = this.data.name;
    }
}

/***/ }),

/***/ "./Game/Classes/Building.js":
/*!**********************************!*\
  !*** ./Game/Classes/Building.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Building)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configurations */ "./Game/configurations.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./Game/Classes/Vector.js");



class Building extends _Vector__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor({sid, type, name, x, y, scale}) {
        super({x: x, y: y})

        this.sid = sid;

        this.type = type;
        this.data = _configurations__WEBPACK_IMPORTED_MODULE_0__.buildingTypes[type];

        this.x = x;
        this.y = y;
        this.xWiggle = 0;
        this.yWiggle = 0;

        this.name = name || this.data.name;
        this.scale = scale;
    }

    update(delta) {
        if(this.xWiggle) this.xWiggle *= Math.pow(0.99, delta);
        if(this.yWiggle) this.yWiggle *= Math.pow(0.99, delta);
    }
}

/***/ }),

/***/ "./Game/Classes/Player.js":
/*!********************************!*\
  !*** ./Game/Classes/Player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./Game/Classes/Vector.js");
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configurations */ "./Game/configurations.js");



class Player extends _Vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(data) {
        super(data);

        this.sid = data.sid;
        
        this.health = _configurations__WEBPACK_IMPORTED_MODULE_1__["default"].maxPlayerHealth;
        this.maxHealth = this.health;

        this.t2 = 0;
        this.t1 = 0;
        this.delta = 0;
        this.d2 = 0;
        this.d1 = 0;
        this.dir = 0;

        this.outOfRange = false;

        this.rightFoot = false;

        this.scale = 35;

        this.name = data.name;

        this.animTime = 0;
        this.animSpeed = 0;
        this.targetAngle = 0;
        this.dirPlus = 0;

        this.a = 0;
        this.f = 0;
    }

    changeHealth(value) {
        this.health += value;
    }

    spawn(resources) {

    }

    startAnimation(hitObject) {
        this.animTime = this.animSpeed = 300; //List.weapons[index].speed;

        this.targetAngle = hitObject ? -_configurations__WEBPACK_IMPORTED_MODULE_1__["default"].hitAngle : -Math.PI;
        this.b = 0;
        this.$ = 0;
    }

    animate(delta) {
        if(this.animTime > 0) {
            this.animTime -= delta;

            if(this.animTime <= 0) {
                this.animTime = 0;
                this.dirPlus = 0;
                this.a = 0;
                this.f = 0;
            } else {
                if(this.f == 0) {
                    this.a += delta / (this.animSpeed * _configurations__WEBPACK_IMPORTED_MODULE_1__["default"].hitReturnRatio);
                    this.dirPlus = lerp(0, this.targetAngle, Math.min(1, this.a));

                    if(this.a >= 1) {
                        this.a = 1;
                        this.f = 1;
                    }
                } else {
                    this.a -= delta / (this.animSpeed * (1 - _configurations__WEBPACK_IMPORTED_MODULE_1__["default"].hitReturnRatio));
                    this.dirPlus = lerp(0, this.targetAngle, Math.max(0, this.a));
                }
            }
        }
    }
}

function lerp(e, t, i) {
    return e + (t - e) * i
}

/***/ }),

/***/ "./Game/Classes/Vector.js":
/*!********************************!*\
  !*** ./Game/Classes/Vector.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector)
/* harmony export */ });
class Vector {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.x1 = this.x;
        this.y1 = this.y;
        this.lastx = this.x;
        this.lasty = this.y;

        this.lerpx = this.x;
        this.lerpy = this.y;
        this.lastlerpx = this.lerpx;
        this.lastlerpy = this.lerpy;

        this.xVel = this.x;
        this.yVel = this.y;
        this.xAccel = this.x;
        this.yAccel = this.y;
    }
}

/***/ }),

/***/ "./Game/Render/functions/makeImage.js":
/*!********************************************!*\
  !*** ./Game/Render/functions/makeImage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeImage)
/* harmony export */ });


function makeImage(src) {
    let img = new Image();
    img.onload = function() {
        this.isLoaded = true;
    };
    img.src = src;

    return img;
}

/***/ }),

/***/ "./Game/Render/functions/renderAnimals.js":
/*!************************************************!*\
  !*** ./Game/Render/functions/renderAnimals.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAnimals)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main */ "./Game/main.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");




function renderAnimals(xOffset, yOffset) {
    let tmp;
    for(let i = _main__WEBPACK_IMPORTED_MODULE_0__["default"].animals.length; i--;) {
        if(tmp = _main__WEBPACK_IMPORTED_MODULE_0__["default"].animals[i]) {
            //tmp.animate(dekta);

            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.save();
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.rotate(tmp.dir);
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.translate(tmp.x, tmp.y);
            //ctx.rotate(tmp.dir - (Math.PI / 2));

            const scale = tmp.data.scale * 1.2 * (tmp.spriteMlt || 1);
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(tmp.data.img, -scale, -scale, scale * 2, scale * 2)
    
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();

            /*
            ctx.beginPath();
            ctx.fillStyle = "#ff0000";
            ctx.arc(tmp.x - xOffset, tmp.y - yOffset, 50, 0, Math.PI * 2);
            ctx.fill();
            */
        }
    }
}

/***/ }),

/***/ "./Game/Render/functions/renderBoundary.js":
/*!*************************************************!*\
  !*** ./Game/Render/functions/renderBoundary.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBoundary)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");



function renderBoundary(xOffset, yOffset) {
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#000";
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.globalAlpha = 0.15;
    if(xOffset <= 0) _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, -xOffset, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);
    if(_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - xOffset <= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth) {
        let size = Math.max(0, -yOffset);
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - xOffset, size, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - xOffset), _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight - size);
    }

    if(yOffset <= 0) _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(-xOffset, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth + xOffset, -yOffset);
    if(_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - yOffset <= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight) {
        let size = Math.max(0, -xOffset);
        let a = 0;

        if(_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - xOffset <= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth) {
            a = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - xOffset);
        }

        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(size, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - yOffset, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth - size - a, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - yOffset));
    }
}

/***/ }),

/***/ "./Game/Render/functions/renderBridge.js":
/*!***********************************************!*\
  !*** ./Game/Render/functions/renderBridge.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBridge)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");
/* harmony import */ var _makeImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeImage */ "./Game/Render/functions/makeImage.js");





function renderBridge(xOffset, yOffset) {
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.save();
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.translate(3000 - xOffset, 3000 - yOffset);

    //const scale = 550;
    //ctx.drawImage(bridgeSprite, -scale, -scale, scale * 2, scale * 2)

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].textOutlineColor;
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#cebd5f";

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(-250, -400, 250, 400);
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fill();

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();
}

/***/ }),

/***/ "./Game/Render/functions/renderFootSteps.js":
/*!**************************************************!*\
  !*** ./Game/Render/functions/renderFootSteps.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FootStep: () => (/* binding */ FootStep),
/* harmony export */   addFootStep: () => (/* binding */ addFootStep),
/* harmony export */   "default": () => (/* binding */ renderFootSteps)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");
// foot steps will be created in update players every 3 ticks or something



class FootStep {
    constructor(x, y, size, dir) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dir = dir;

        this.alpha = 0.8;
        this.sizeAlpha = 1;
    }

    update(delta) {
        if(this.alpha <= 0) return;
        this.alpha -= delta / 700;

        if(this.alpha <= 0) this.alpha = 0;

        this.sizeAlpha += delta / 80;
    }

    draw(xOffset, yOffset) {
        _render__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
        _render__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "#000";
        _render__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = this.alpha;

        _render__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(this.x - xOffset, this.y - yOffset, this.size, 0, Math.PI * 2);
        _render__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
    }
}

let footsteps = [];

function addFootStep(x, y, size) {
    footsteps.push(new FootStep(x, y, size));
}

function renderFootSteps(xOffset, yOffset, delta) {
    let footstep;

    footsteps = footsteps.filter(step => step.alpha > 0);

    for(let i = footsteps.length; i--;) {
        if(footstep = footsteps[i]) {
            footstep.update(delta);
            footstep.draw(xOffset, yOffset);
        }
    }

    _render__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = 1;
}

/***/ }),

/***/ "./Game/Render/functions/renderGameObjects.js":
/*!****************************************************!*\
  !*** ./Game/Render/functions/renderGameObjects.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addGameObjects)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ "./Game/main.js");
/* harmony import */ var _Utils_randomInt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/randomInt */ "./Game/Utils/randomInt.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");





function addGameObjects(xOffset, yOffset, delta) {
    for (let i = _main__WEBPACK_IMPORTED_MODULE_1__["default"].buildings.length; i--;) {
        const object = _main__WEBPACK_IMPORTED_MODULE_1__["default"].buildings[i];
        if (!object) continue;

        object.update(delta);

        _render__WEBPACK_IMPORTED_MODULE_3__.ctx.save();
        _render__WEBPACK_IMPORTED_MODULE_3__.ctx.translate(object.x + object.xWiggle - xOffset, object.y + object.yWiggle - yOffset);

        const sprite = getObjectSprite(object);
        _render__WEBPACK_IMPORTED_MODULE_3__.ctx.drawImage(sprite, -(sprite.width / 2), -(sprite.height / 2));

        _render__WEBPACK_IMPORTED_MODULE_3__.ctx.restore();
    }
}

let objectSprites = {};

function getObjectSprite(tmpObj) {
    let biomeID = (tmpObj.y >= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop) ? 2 : ((tmpObj.y <= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop) ? 1 : 0);

    let sprite = objectSprites[`${tmpObj.name == "bush" ? tmpObj.name + "" + tmpObj.y : tmpObj.name}${biomeID}`];
    if (!sprite) {
        let tmpCanvas = document.createElement("canvas");
        let size = tmpObj.scale * 2.5 + 50;
        tmpCanvas.width = tmpCanvas.height = size;

        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate(size / 2, size / 2);
        tmpContext.rotate(Math.PI / 2);

        tmpContext.strokeStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].outlineColor;
        tmpContext.lineWidth = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].lineWidth;

        if (tmpObj.scale === 100) {
            for (let i = 0; i < 2; i++) {
                const scale = (() => {
                    if(!i) return tmpObj.scale + 50;
                    else return tmpObj.scale * 0.5 + 40;
                }); //tmpObj.scale * (!i ? 1 : 0.5) + 50;
                (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderStar)(tmpContext, 7, scale(), scale() * 0.7);
                tmpContext.fillStyle = !biomeID ? (!i ? "#9ebf57" : "#b4db62") : (!i ? "#e3f1f4" : "#fff");
                tmpContext.fill();
                if (!i) tmpContext.stroke();
            }
        } else if (tmpObj.scale === 90) {
            tmpContext.fillStyle = biomeID === 2 ? "#938d77" : "#939393";
            (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderStar)(tmpContext, 3, tmpObj.scale, tmpObj.scale);
            tmpContext.fill();
            tmpContext.stroke();

            tmpContext.fillStyle = biomeID === 2 ? "#b2ab90" : "#bcbcbc";
            (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderStar)(tmpContext, 3, tmpObj.scale * 0.55, tmpObj.scale * 0.65);
            tmpContext.fill();
        } else if (tmpObj.scale === 75) {
            (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderBlob)(tmpContext, 6, tmpObj.scale, tmpObj.scale * 0.7);
            tmpContext.fillStyle = biomeID ? "#e3f1f4" : "#89a54c";
            tmpContext.fill();
            tmpContext.stroke();

            tmpContext.fillStyle = biomeID ? "#6a64af" : "#c15555";
            const berries = 4;
            const rotVal = (Math.PI * 2) / berries;
            for (let i = 0; i < berries; i++) {
                const range = (0,_Utils_randomInt__WEBPACK_IMPORTED_MODULE_2__["default"])(tmpObj.scale / 3.5, tmpObj.scale / 2.3);
                (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderCircle)(
                    range * Math.cos(rotVal * i),
                    range * Math.sin(rotVal * i),
                    (0,_Utils_randomInt__WEBPACK_IMPORTED_MODULE_2__["default"])(10, 12),
                    tmpContext
                );
            }
        } else if (tmpObj.scale === 250) {
            tmpContext.fillStyle = "#e0c655";
            (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderStar)(tmpContext, 3, tmpObj.scale, tmpObj.scale);
            tmpContext.fill();
            tmpContext.stroke();

            tmpContext.fillStyle = "#ebdca3";
            (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderStar)(tmpContext, 3, tmpObj.scale * 0.55, tmpObj.scale * 0.65);
            tmpContext.fill();
        }

        objectSprites[`${tmpObj.name == "bush" ? tmpObj.name + "" + tmpObj.y : tmpObj.name}${biomeID}`] = tmpCanvas;
        sprite = tmpCanvas;
    }

    return sprite;
}


/***/ }),

/***/ "./Game/Render/functions/renderGrid.js":
/*!*********************************************!*\
  !*** ./Game/Render/functions/renderGrid.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderGrid)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");



function renderGrid(camera) {
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = 4;
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.globalAlpha = 0.06;
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#000";
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();

    for (let i = -camera.x; i < _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth; i += 60) {
        if (i > 0) {
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(i, 0);
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(i, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);
        }
    }

    for (let i = -camera.y; i < _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight; i += 60) {
        if (i > 0) {
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(0, i);
            _render__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, i);
        }
    }

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.globalAlpha = 1;
}


/***/ }),

/***/ "./Game/Render/functions/renderMap.js":
/*!********************************************!*\
  !*** ./Game/Render/functions/renderMap.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMap)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");



function renderMap(xOffset, yOffset, riverPaddingOffset) {
    //ctx.fillStyle = colors.grasslands;
    //ctx.fillRect(0, 0, configurations.maxScreenWidth, configurations.maxScreenHeight);
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.globalAlpha = 1;

    if (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset <= 0 && _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset >= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight) {
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.grasslands;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);
    } else if (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset <= 0) {
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.desert;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);
    } else if (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset >= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight) {
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.winter;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);
    } else if (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset >= 0) {
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.winter;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset);

        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.grasslands;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset));
    } else {
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.grasslands;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset);

        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__.colors.desert;
        _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].snowBiomeTop - yOffset));
    }

    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#dbc666";
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderRiverPortion)(xOffset, yOffset, _render__WEBPACK_IMPORTED_MODULE_1__.ctx, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].riverWidth);
    _render__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#91b2db";
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderRiverPortion)(xOffset, yOffset, _render__WEBPACK_IMPORTED_MODULE_1__.ctx, (riverPaddingOffset - 1) * 1e3 * riverPaddingOffset, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].riverWidth - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].riverPadding);
}

/***/ }),

/***/ "./Game/Render/functions/renderPlayerInfo.js":
/*!***************************************************!*\
  !*** ./Game/Render/functions/renderPlayerInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPlayerInfo)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ "./Game/main.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");





function renderPlayerInfo(xOffset, yOffset, delta) {
    let tmpObj;

    _render__WEBPACK_IMPORTED_MODULE_2__.ctx.strokeStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].textOutlineColor;
    _render__WEBPACK_IMPORTED_MODULE_2__.ctx.globalAlpha = 1;

    for(let i = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players.length; i--;) {
        if(tmpObj = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players[i]) {
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.font = "30px Hammersmith One";
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = "#fff";
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.textBaseline = "middle";
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.textAlign = "center";
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.lineWidth = 8;
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.lineJoin = "round"; // fix text clipping

            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.strokeText("[" + tmpObj.sid + "] " + tmpObj.name, tmpObj.lerpx - xOffset, tmpObj.lerpy - yOffset - tmpObj.scale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].nameY);
            _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillText("[" + tmpObj.sid + "] " + tmpObj.name, tmpObj.lerpx - xOffset, tmpObj.lerpy - yOffset - tmpObj.scale - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].nameY);

            if(tmpObj.health > 0) {
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].textOutlineColor;
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.roundRect(tmpObj.lerpx - xOffset - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarWidth - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarPad, tmpObj.lerpy - yOffset + tmpObj.scale + _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].nameY, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarWidth * 2 + _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarPad * 2, 17, 8);
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = tmpObj.sid == _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.sid ? "#8ecc51" : "#cc5151";
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.roundRect(tmpObj.lerpx - xOffset - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarWidth, tmpObj.lerpy - yOffset + tmpObj.scale + _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].nameY + _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarPad, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarWidth * 2 * (tmpObj.health / tmpObj.maxHealth), 17 - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].healthBarPad * 2, 7);
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();
            }

            if(!tmpObj.outOfRange && tmpObj.chatCountdown > 0) {
                tmpObj.chatCountdown = Math.max(tmpObj.chatCountdown - delta, 0);
    
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.font = "32px Hammersmith One";
                let textSize = _render__WEBPACK_IMPORTED_MODULE_2__.ctx.measureText(tmpObj.chatMessage);
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.textBaseline = "middle";
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.textAlign = "center";
    
                let tmpX = tmpObj.lerpx - xOffset;
                let tmpY = tmpObj.lerpy - yOffset - tmpObj.scale - 90;
                let height = 47;
                let width = textSize.width + 17;
    
                // background
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.roundRect(tmpX - (width / 2), tmpY - (height / 2), width, height, 6);
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fill();
    
                // actual text
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = "#fff";
                _render__WEBPACK_IMPORTED_MODULE_2__.ctx.fillText(tmpObj.chatMessage, tmpX, tmpY);
            }
        }
    }
}

/***/ }),

/***/ "./Game/Render/functions/renderPlayers.js":
/*!************************************************!*\
  !*** ./Game/Render/functions/renderPlayers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPlayers)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ "./Game/main.js");
/* harmony import */ var _Utils_renderCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/renderCircle */ "./Game/Utils/renderCircle.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_updatePlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../WebSocket/hooks/eventHooks/updatePlayers */ "./Game/WebSocket/hooks/eventHooks/updatePlayers.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./Game/Render/render.js");
/* harmony import */ var _renderWeapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderWeapon */ "./Game/Render/functions/renderWeapon.js");







function renderPlayers(xOffset, yOffset, delta) {
    let tmpObj;
    for(let i = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players.length; i--;) {
        if(tmpObj = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players[i]) {
            tmpObj.animate(delta);

            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.beginPath();
            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.save();
            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.globalAlpha = 1;
            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.translate(tmpObj.lerpx - xOffset, tmpObj.lerpy - yOffset);
            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.rotate((tmpObj.sid == _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.sid ? (0,_WebSocket_hooks_eventHooks_updatePlayers__WEBPACK_IMPORTED_MODULE_3__.getAimDir)() : tmpObj.dir) + tmpObj.dirPlus);
            renderPlayer(tmpObj);
            _render__WEBPACK_IMPORTED_MODULE_4__.ctx.restore();
        }
    }
}

function renderPlayer(tmpObj) {
    _render__WEBPACK_IMPORTED_MODULE_4__.ctx.lineWidth = 5.5;
    _render__WEBPACK_IMPORTED_MODULE_4__.ctx.lineJoin = "miter"; //to stop clipping

    const i = Math.PI / 4 * (_configurations__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[0].armS || 1)
    , n = /*tmpObj.buildIndex < 0*/ true && _configurations__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[0].hndS || 1
    , s = /*tmpObj.buildIndex < 0*/ true && _configurations__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[0].hndD || 1;

    let weapon = _configurations__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[0];
    //if(/*tmpObj.buildIndex < 0 &&*/ !weapon.aboveHand) {
        // render weapons

    //}

    (0,_renderWeapon__WEBPACK_IMPORTED_MODULE_5__["default"])(weapon, tmpObj.scale, 0, _render__WEBPACK_IMPORTED_MODULE_4__.ctx);

    _render__WEBPACK_IMPORTED_MODULE_4__.ctx.fillStyle = "#bf8f54"; //config.skinColors[tmpObj.skinColor];
    (0,_Utils_renderCircle__WEBPACK_IMPORTED_MODULE_2__["default"])(tmpObj.scale * Math.cos(i), tmpObj.scale * Math.sin(i), 14);
    (0,_Utils_renderCircle__WEBPACK_IMPORTED_MODULE_2__["default"])(tmpObj.scale * /*s*/1 * Math.cos(-i * /*n*/1), tmpObj.scale * /*s*/1 * Math.sin(-i * /*n*/1), 14);

    (0,_Utils_renderCircle__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 0, tmpObj.scale, _render__WEBPACK_IMPORTED_MODULE_4__.ctx);

}

/***/ }),

/***/ "./Game/Render/functions/renderWeapon.js":
/*!***********************************************!*\
  !*** ./Game/Render/functions/renderWeapon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderWeapon)
/* harmony export */ });
let weaponSprites = {};
function renderWeapon(weapon, x, y, ctx) {
    ctx.drawImage(weapon.img, x + weapon.xOff - (weapon.length / 2), y + weapon.yOff - (weapon.width / 2), weapon.length, weapon.width);
}

/***/ }),

/***/ "./Game/Render/render.js":
/*!*******************************!*\
  !*** ./Game/Render/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ctx: () => (/* binding */ ctx),
/* harmony export */   "default": () => (/* binding */ render),
/* harmony export */   renderBlob: () => (/* binding */ renderBlob),
/* harmony export */   renderCircle: () => (/* binding */ renderCircle),
/* harmony export */   renderRiverPortion: () => (/* binding */ renderRiverPortion),
/* harmony export */   renderStar: () => (/* binding */ renderStar)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./Game/main.js");
/* harmony import */ var _UI_minimap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/minimap */ "./Game/UI/minimap.js");
/* harmony import */ var _Utils_getDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/getDirection */ "./Game/Utils/getDirection.js");
/* harmony import */ var _Utils_getDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/getDistance */ "./Game/Utils/getDistance.js");
/* harmony import */ var _Utils_randomInt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/randomInt */ "./Game/Utils/randomInt.js");
/* harmony import */ var _functions_renderAnimals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/renderAnimals */ "./Game/Render/functions/renderAnimals.js");
/* harmony import */ var _functions_renderBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/renderBoundary */ "./Game/Render/functions/renderBoundary.js");
/* harmony import */ var _functions_renderBridge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/renderBridge */ "./Game/Render/functions/renderBridge.js");
/* harmony import */ var _functions_renderFootSteps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/renderFootSteps */ "./Game/Render/functions/renderFootSteps.js");
/* harmony import */ var _functions_renderGameObjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/renderGameObjects */ "./Game/Render/functions/renderGameObjects.js");
/* harmony import */ var _functions_renderGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/renderGrid */ "./Game/Render/functions/renderGrid.js");
/* harmony import */ var _functions_renderMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/renderMap */ "./Game/Render/functions/renderMap.js");
/* harmony import */ var _functions_renderPlayerInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/renderPlayerInfo */ "./Game/Render/functions/renderPlayerInfo.js");
/* harmony import */ var _functions_renderPlayers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/renderPlayers */ "./Game/Render/functions/renderPlayers.js");
/*

do we really need more then one file to render everything

maybe import functions from a different file, so it's more organized?
*/








//import min from "../Utils/math"









const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); // consider webgl later on, much more performance efficient

// SMOOTH LERP:
Math.lerpAngle = function(value1, value2, amount) {
    let difference = Math.abs(value2 - value1);
    if (difference > Math.PI) {
        if (value1 > value2) {
            value2 += Math.PI * 2;
        } else {
            value1 += Math.PI * 2;
        }
    }
    let value = value2 + ((value1 - value2) * amount);
    if (value >= 0 && value <= Math.PI * 2) return value;
    return value % (Math.PI * 2);
};

// ROUNDED RECTANGLE:
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    if (r < 0)
        r = 0;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};

//window.devicePixelRatio = 1.4; //change to adjust game res
window.addEventListener("resize", () => {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;
    canvas.style.width = `${screenWidth}px`;
    canvas.style.height = `${screenHeight}px`;

    let scaleFillNative = Math.max(
        screenWidth / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth,
        screenHeight / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight
    );

    ctx.setTransform(
        scaleFillNative,
        0,
        0,
        scaleFillNative,
        (screenWidth - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth * scaleFillNative)) / 2,
        (screenHeight - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight * scaleFillNative)) / 2
    );
});

window.onload = function() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;
    canvas.style.width = `${screenWidth}px`;
    canvas.style.height = `${screenHeight}px`;

    let scaleFillNative = Math.max(
        screenWidth / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth,
        screenHeight / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight
    );

    ctx.setTransform(
        scaleFillNative,
        0,
        0,
        scaleFillNative,
        (screenWidth - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth * scaleFillNative)) / 2,
        (screenHeight - (_configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight * scaleFillNative)) / 2
    );
}

canvas.style = `
  width: ${window.innerWidth};
  height: ${window.innerHeight};
`;

let xOffset, yOffset = 0;
let riverPaddingOffset = 0;
let riverGrow = 1;
let camera = {
    x: _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale / 2,
    y: _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale / 2
};
function render(delta, frameDate) {
    //ctx.clearRect(0, 0, configurations.maxScreenWidth, configurations.maxScreenWidth);

    if(_main__WEBPACK_IMPORTED_MODULE_1__["default"].player) {
        let distance = (0,_Utils_getDistance__WEBPACK_IMPORTED_MODULE_4__["default"])(camera.x, camera.y, _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx, _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy);
        let direction = (0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_3__["default"])(_main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx, _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy, camera.x, camera.y) - Math.PI;

        let increment = Math.min(distance * 0.0045 * delta, distance);

        if (distance > 0.05) {
            camera.x += increment * Math.cos(direction);
            camera.y += increment * Math.sin(direction);
        } else {
            camera.x = _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx;
            camera.y = _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy;
        }

        let tmpObj;
        let timeSinceTick = frameDate - (1000 / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].serverUpdateRate)
        for(let i = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players.length + _main__WEBPACK_IMPORTED_MODULE_1__["default"].animals.length; i--;) {
            if(tmpObj = _main__WEBPACK_IMPORTED_MODULE_1__["default"].players[i] || _main__WEBPACK_IMPORTED_MODULE_1__["default"].animals[i - _main__WEBPACK_IMPORTED_MODULE_1__["default"].players.length]) {
                tmpObj.lastlerpx = tmpObj.lerpx;
                tmpObj.lastlerpy = tmpObj.lerpy;

                if(tmpObj.outOfRange) {
                    tmpObj.lerpx = tmpObj.x;
                    tmpObj.lerpy = tmpObj.y;
                } else {
                    let timeDifference = tmpObj.t2 - tmpObj.t1;
                    let playerDelta = (timeSinceTick - tmpObj.t1) / timeDifference;
                    const stable = 170;

                    tmpObj.delta += delta;
                    
                    let tmpRate = Math.min(1.7, tmpObj.delta / stable);

                    let dist = tmpObj.x - tmpObj.x1;
                    tmpObj.lerpx = tmpObj.x1 + (dist * tmpRate);

                    dist = tmpObj.y - tmpObj.y1;
                    tmpObj.lerpy = tmpObj.y1 + (dist * tmpRate);

                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, playerDelta));
                }
            }
        }

        xOffset = camera.x - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth / 2;
        yOffset = camera.y - _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight / 2;
        
        riverPaddingOffset += riverGrow * _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].waveSpeed * delta;

        if(riverPaddingOffset >= _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].waveMax) {
            riverPaddingOffset = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].waveMax;
            riverGrow = -1;
        } else if(riverPaddingOffset <= 1) {
            riverPaddingOffset = riverGrow = 1;
        }

        (0,_functions_renderMap__WEBPACK_IMPORTED_MODULE_12__["default"])(xOffset, yOffset, riverPaddingOffset);

        (0,_functions_renderGrid__WEBPACK_IMPORTED_MODULE_11__["default"])(camera);

        ctx.globalAlpha = 1;
        (0,_functions_renderBoundary__WEBPACK_IMPORTED_MODULE_7__["default"])(xOffset, yOffset);

        ctx.globalAlpha = 1;
        (0,_functions_renderBridge__WEBPACK_IMPORTED_MODULE_8__["default"])(xOffset, yOffset);

        ctx.fillStyle = "#000";
        (0,_functions_renderFootSteps__WEBPACK_IMPORTED_MODULE_9__["default"])(xOffset, yOffset, delta);
    
        ctx.strokeStyle = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].outlineColor;
        ctx.globalAlpha = 1;
        (0,_functions_renderPlayers__WEBPACK_IMPORTED_MODULE_14__["default"])(xOffset, yOffset, delta);

        (0,_functions_renderAnimals__WEBPACK_IMPORTED_MODULE_6__["default"])(xOffset, yOffset);

        ctx.globalAlpha = 1;
        (0,_functions_renderGameObjects__WEBPACK_IMPORTED_MODULE_10__["default"])(xOffset, yOffset, delta);
    
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgba(0, 0, 70, 0.35)`;
        ctx.fillRect(0, 0, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight);

        (0,_functions_renderPlayerInfo__WEBPACK_IMPORTED_MODULE_13__["default"])(xOffset, yOffset, delta);

        (0,_UI_minimap__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else {
        // set to default (center of map)
        camera.x = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale / 2;
        camera.y = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale / 2;
    }
}
/*
*/

function renderRiverPortion(e, t, i, n) {

    const s = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].riverWidth + n
    , r = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale / 2 - t - s / 2;
    r < _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenHeight && r + s > 0 && i.fillRect(0, r, _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].maxScreenWidth, s)
}

function renderStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

function renderBlob(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    let tmpOuter;
    ctxt.beginPath();
    ctxt.moveTo(0, -inner);
    for (let i = 0; i < spikes; i++) {
        tmpOuter = (0,_Utils_randomInt__WEBPACK_IMPORTED_MODULE_5__["default"])(outer + 0.9, outer * 1.2);
        ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter,
                              Math.cos(rot + (step * 2)) * inner, Math.sin(rot + (step * 2)) * inner);
        rot += step * 2;
    }
    ctxt.lineTo(0, -inner);
    ctxt.closePath();
}

function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || mainContext;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}


/***/ }),

/***/ "./Game/UI/chatLog.js":
/*!****************************!*\
  !*** ./Game/UI/chatLog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMessage)
/* harmony export */ });
const chatlog = document.getElementById("chatLog");

function addMessage(owner, message) {
    // beware of XSS

    let data = `${owner}: ${message}`;
    
    let tmp = document.createElement("p");
    tmp.className = "chatElm";
    tmp.innerText = data;

    chatlog.appendChild(tmp);

    chatlog.scrollTop = chatlog.scrollHeight;
}

/***/ }),

/***/ "./Game/UI/eventHooks.js":
/*!*******************************!*\
  !*** ./Game/UI/eventHooks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerDOMEventHooks),
/* harmony export */   leaderboard: () => (/* binding */ leaderboard),
/* harmony export */   loadingText: () => (/* binding */ loadingText),
/* harmony export */   mainMenu: () => (/* binding */ mainMenu),
/* harmony export */   menuCardHolder: () => (/* binding */ menuCardHolder),
/* harmony export */   nameInput: () => (/* binding */ nameInput)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./Game/main.js");


const serverSelector = document.getElementById("serverBrowser");
const loadingText = document.getElementById("loadingText");
const mainMenu = document.getElementById("mainMenu");
const menuCardHolder = document.getElementById("menuCardHolder");
const nameInput = document.getElementById("nameInput");
const leaderboard = document.getElementById("leaderboard");

function registerDOMEventHooks() {
    document.getElementById("enterGame").addEventListener("click", (event) => {
        _main__WEBPACK_IMPORTED_MODULE_0__["default"].changeRegion(serverSelector.value || "miami");
        _main__WEBPACK_IMPORTED_MODULE_0__["default"].spawn();

        loadingText.style.display = "block";
        menuCardHolder.style.display = "none";
    });
}

/***/ }),

/***/ "./Game/UI/minimap.js":
/*!****************************!*\
  !*** ./Game/UI/minimap.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMinimap),
/* harmony export */   minimap: () => (/* binding */ minimap),
/* harmony export */   minimapCtx: () => (/* binding */ minimapCtx)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./Game/main.js");



const minimap = document.getElementById("minimap");
const minimapCtx = minimap.getContext("2d");

function renderMinimap(delta) {
    // scale it accordingly
    
    let ctx = minimapCtx; // easier to write with :skull:

    ctx.clearRect(0, 0, minimap.width, minimap.height);

    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc((_main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale) * minimap.width, (_main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy / _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].mapScale) * minimap.height, 4, 0, Math.PI * 2);
    ctx.fill();
}

/***/ }),

/***/ "./Game/UI/updateLeaderboard.js":
/*!**************************************!*\
  !*** ./Game/UI/updateLeaderboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLeaderboard)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./Game/main.js");
/* harmony import */ var _Utils_kFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/kFormat */ "./Game/Utils/kFormat.js");
/* harmony import */ var _eventHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventHooks */ "./Game/UI/eventHooks.js");





// do test
function updateLeaderboard(data) {
    _eventHooks__WEBPACK_IMPORTED_MODULE_2__.leaderboard.innerHTML = `
    <div style="font-size: 30px;">Leaderboard</div>
    `;

    for (let i = 0; i < data.length; i++) {        
        _eventHooks__WEBPACK_IMPORTED_MODULE_2__.leaderboard.innerHTML += `
        <div id="leaderHolder" style="display: flex; justify-content: space-between; align-items: center;">
            <div id="leaderboardItem" style="font-size: 22px; color: ${data[i].sid == _main__WEBPACK_IMPORTED_MODULE_0__["default"].player.sid ? "#fff" : "rgba(255, 255, 255, 0.5)"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 75%;">
                ${i + 1}. [${data[i].sid}] ${data[i].name}
            </div>

            <div id="leaderScore" style="font-size: 22px; color: #fff;">
                ${(0,_Utils_kFormat__WEBPACK_IMPORTED_MODULE_1__["default"])(1234)}
            </div>
        </div>
        `;
    }
}

/***/ }),

/***/ "./Game/Utils/getDirection.js":
/*!************************************!*\
  !*** ./Game/Utils/getDirection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDirection)
/* harmony export */ });
//import atan2 from "./math"

function getDirection(ax, ay, bx, by) {
    return Math.atan2(by - ay, bx - ax);
}

/***/ }),

/***/ "./Game/Utils/getDistance.js":
/*!***********************************!*\
  !*** ./Game/Utils/getDistance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDistance),
/* harmony export */   fastHypot: () => (/* binding */ fastHypot)
/* harmony export */ });
//import hypot from "./math"

function getDistance(ax, ay, bx, by) {
    return Math.hypot(by - ay, bx - ax);
}

// Credit Wynd
function fastHypot(a, b){
    const c = Math.SQRT2-1;
    a = Math.abs(a);
    b = Math.abs(b);
    if(a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    return (c * a) + b
}

/***/ }),

/***/ "./Game/Utils/kFormat.js":
/*!*******************************!*\
  !*** ./Game/Utils/kFormat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ kFormat)
/* harmony export */ });


function kFormat(number) {
    if(typeof number != 'number') throw new TypeError("value passed to kFormat is not number", number);

    if (number >= 1e6) {
        return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1) + "k";
    } else {
        return number;
    }
}

/***/ }),

/***/ "./Game/Utils/randomInt.js":
/*!*********************************!*\
  !*** ./Game/Utils/randomInt.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ randomInt)
/* harmony export */ });
function randomInt(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min;
}

/***/ }),

/***/ "./Game/Utils/renderCircle.js":
/*!************************************!*\
  !*** ./Game/Utils/renderCircle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawCircle)
/* harmony export */ });
/* harmony import */ var _Render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/render */ "./Game/Render/render.js");


function drawCircle(x, y, radius, context = _Render_render__WEBPACK_IMPORTED_MODULE_0__.ctx, shouldFill = true, shouldStroke = true) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    
    if (shouldFill) {
        context.fill();
    }

    if (shouldStroke) {
        context.stroke();
    }
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHook.js":
/*!*******************************************!*\
  !*** ./Game/WebSocket/hooks/eventHook.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEvent)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations */ "./Game/configurations.js");


function handleEvent(packetType) {
    if(typeof packetType[0][0] !== "string") throw new TypeError("packet type is not of String");

    if(typeof _configurations__WEBPACK_IMPORTED_MODULE_0__.packetMap[packetType[0][0]] !== "function") throw new Error("function type does not exist for packet type", packetType);

    _configurations__WEBPACK_IMPORTED_MODULE_0__.packetMap[packetType[0][0]](packetType[0][1]);
}


/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/addGameObjects.js":
/*!***********************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/addGameObjects.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addGameObjects)
/* harmony export */ });
/* harmony import */ var _Classes_Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Classes/Building */ "./Game/Classes/Building.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");




function addGameObjects(data) {
    for(let i = 0; i < data[0].length; i++) {
        let d = new _Classes_Building__WEBPACK_IMPORTED_MODULE_0__["default"](data[0][i]);
        _main__WEBPACK_IMPORTED_MODULE_1__["default"].buildings.push(d);
    }
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/addPlayer.js":
/*!******************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/addPlayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPlayer)
/* harmony export */ });
/* harmony import */ var _Classes_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Classes/Player */ "./Game/Classes/Player.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");



function addPlayer(data) {
    console.warn(data)
    
    if(typeof data !== 'object') throw new TypeError("Param 'data' is not of Object");

    let tmpPlayer = new _Classes_Player__WEBPACK_IMPORTED_MODULE_0__["default"](data[0]);
    _main__WEBPACK_IMPORTED_MODULE_1__["default"].players.push(tmpPlayer);

    if(data[1]) _main__WEBPACK_IMPORTED_MODULE_1__["default"].player = tmpPlayer;
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/gatherAnimation.js":
/*!************************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/gatherAnimation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gatherAnimation)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");
/* harmony import */ var _Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utils/getDirection */ "./Game/Utils/getDirection.js");




function gatherAnimation([sid, index, hitObject]) {
    // hit object for later
    console.log(sid, index, hitObject)

    let tmpObj = _main__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerBySid(sid);

    if(tmpObj) {
        tmpObj.startAnimation(hitObject.length);

        console.log(hitObject)

        let tmp;
        for(let i = hitObject.length; i--;) {
            if(tmp = _main__WEBPACK_IMPORTED_MODULE_1__["default"].getBuildingBySid(hitObject[i].sid)) {
                tmp.xWiggle += _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].wiggleIntensity * Math.cos((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(_main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx, _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy, tmp.x, tmp.y));
                tmp.yWiggle += _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].wiggleIntensity * Math.sin((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(_main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpx, _main__WEBPACK_IMPORTED_MODULE_1__["default"].player.lerpy, tmp.x, tmp.y));
            }
        }
    }
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/pingSocketResponse.js":
/*!***************************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/pingSocketResponse.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pingSocketResponse)
/* harmony export */ });


function pingSocketResponse(time) {
    let ping = Date.now() - time[0];

    document.getElementById("pingDisplay").innerHTML = `Ping: ${ping}ms`;
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/receiveChat.js":
/*!********************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/receiveChat.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ receiveChat)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configurations */ "./Game/configurations.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");
/* harmony import */ var _UI_chatLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/chatLog */ "./Game/UI/chatLog.js");




function receiveChat(data) {
    _main__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerBySid(data[0]).chatMessage = data[1];
    _main__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerBySid(data[0]).chatCountdown = _configurations__WEBPACK_IMPORTED_MODULE_0__["default"].chatCountdown;

    (0,_UI_chatLog__WEBPACK_IMPORTED_MODULE_2__["default"])(_main__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerBySid(data[0]).name || "unknown", data[1])
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/removePlayer.js":
/*!*********************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/removePlayer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removePlayer)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");


function removePlayer(data) {
    let sid = data[0];
    
    let player = _main__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayerBySid(sid);

    if (!player) {
        console.error(`player with sid ${sid} not found`);
        return;
    }

    let playerIndex = _main__WEBPACK_IMPORTED_MODULE_0__["default"].players.indexOf(player);

    if (playerIndex !== -1) {
        _main__WEBPACK_IMPORTED_MODULE_0__["default"].players.splice(playerIndex, 1);
    } else {
        console.error(`player with sid ${sid} not found in the players array`);
    }
}


/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/updateAI.js":
/*!*****************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/updateAI.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAI)
/* harmony export */ });
/* harmony import */ var _Classes_Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Classes/Animal */ "./Game/Classes/Animal.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");




function updateAI(data) {
    for(let i = 0; i < data.length; i++) {
        let ai = _main__WEBPACK_IMPORTED_MODULE_1__["default"].getAnimalBySid(data[i].sid);

        if(ai) {
            ai.x1 = ai.lerpx;
            ai.y1 = ai.lerpy
            ai.x = data[i].x;
            ai.y = data[i].y;
            ai.t1 = (ai.t2 === undefined) ? Date.now() : ai.t2;
            ai.t2 = Date.now();
            ai.d1 = (ai.d2 === void 0 ? data[i].dir : ai.d2);
            ai.d2 = data[i].dir;
            ai.delta = 0;
        } else {
            ai = new _Classes_Animal__WEBPACK_IMPORTED_MODULE_0__["default"](data[i].sid, data[i].type || 1, data[i].x, data[i].y);
            
            ai.sid = data[i].sid;
            ai.x = data[i].x;
            ai.y = data[i].y;
            ai.d2 = data[i].dir;
            ai.health = data[i].health;

            _main__WEBPACK_IMPORTED_MODULE_1__["default"].animals.push(ai);
        }
    }
}

/***/ }),

/***/ "./Game/WebSocket/hooks/eventHooks/updatePlayers.js":
/*!**********************************************************!*\
  !*** ./Game/WebSocket/hooks/eventHooks/updatePlayers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updatePlayers),
/* harmony export */   getAimDir: () => (/* binding */ getAimDir)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main */ "./Game/main.js");
/* harmony import */ var _Render_functions_renderFootSteps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Render/functions/renderFootSteps */ "./Game/Render/functions/renderFootSteps.js");
/* harmony import */ var _Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utils/getDirection */ "./Game/Utils/getDirection.js");
/*

we are going to be copying MooMoo.io's updatePlayer system. Because fuck me!

*/





// works since objects are passed as pointers (javascript is amazing)
let tickCount = 0;
let rightFoot = true;
function updatePlayers(data) {
    //data = data[0]
    tickCount++;

    let tmp;
    for(let i = _main__WEBPACK_IMPORTED_MODULE_0__["default"].players.length; i--;) {
        if(tmp = _main__WEBPACK_IMPORTED_MODULE_0__["default"].players[i]) {
            tmp.outOfRange = true;
        }
    }

    for(let i = 0; i < data.length; i++) {
        let player = _main__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayerBySid(data[i].sid);

        player.outOfRange = false;
        player.x = data[i].x;
        player.y = data[i].y;
        player.x1 = player.lerpx;
        player.y1 = player.lerpy;
        player.t1 = (player.t2 === undefined) ? Date.now() : player.t2;
        player.t2 = Date.now();
        player.d1 = (player.d2 === undefined) ? data[i].dir : player.d2;
        player.d2 = data[i].dir;
        player.delta = 0;

        let footsteps = [
            {
                x: player.lerpx + 20 * Math.cos((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(player.x, player.y, player.x1, player.y1) + Math.PI / 2),
                y: player.lerpy + 20 * Math.sin((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(player.x, player.y, player.x1, player.y1) + Math.PI / 2)
            },
            {
                x: player.lerpx + 20 * Math.cos((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(player.x, player.y, player.x1, player.y1) - Math.PI / 2),
                y: player.lerpy + 20 * Math.sin((0,_Utils_getDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(player.x, player.y, player.x1, player.y1) - Math.PI / 2)
            }
        ];

        if(player.rightFoot) {
            (0,_Render_functions_renderFootSteps__WEBPACK_IMPORTED_MODULE_1__.addFootStep)(footsteps[1].x, footsteps[1].y, 10);
        } else {
            (0,_Render_functions_renderFootSteps__WEBPACK_IMPORTED_MODULE_1__.addFootStep)(footsteps[0].x, footsteps[0].y, 10);
        }

        player.rightFoot = !player.rightFoot;
    }

    if(tickCount % 15 === 0) {
        _main__WEBPACK_IMPORTED_MODULE_0__["default"].webSocket.wsSend("0", Date.now());
    }

    //for(let i = 0; i < data.length; i += 5) {
        //let player = Game.getPlayerBySid(data[i]);

        /*
        player.x = data[i + 1];
        player.y = data[i + 2];
        player.dir = data[i + 3];
        */
    //}

    //addFootStep(Game.player.lerpx, Game.player.lerpy, 10);

    _main__WEBPACK_IMPORTED_MODULE_0__["default"].webSocket.wsSend("m", _main__WEBPACK_IMPORTED_MODULE_0__.keyHandler.angle);
    if(!_main__WEBPACK_IMPORTED_MODULE_0__["default"].lockDir) _main__WEBPACK_IMPORTED_MODULE_0__["default"].webSocket.wsSend("d", getAimDir());
}

let lastDir;
function getAimDir() {
    if(_main__WEBPACK_IMPORTED_MODULE_0__["default"].lockDir) return lastDir;

    let mouseDir = Math.atan2(_main__WEBPACK_IMPORTED_MODULE_0__.mouseEvents.mouseY - (window.innerHeight / 2), _main__WEBPACK_IMPORTED_MODULE_0__.mouseEvents.mouseX - (window.innerWidth / 2));

    lastDir = mouseDir;
    return mouseDir;
}

/***/ }),

/***/ "./Game/WebSocket/main.js":
/*!********************************!*\
  !*** ./Game/WebSocket/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var msgpack_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msgpack-lite */ "./node_modules/msgpack-lite/lib/browser.js");
/* harmony import */ var _hooks_eventHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/eventHook */ "./Game/WebSocket/hooks/eventHook.js");




class Socket extends WebSocket {
    constructor(url, protocols) {
        super(url, protocols);

        this.wsSend = function(message, ...args) {
            let data = [message, ...args];
            this.send(new Uint8Array(msgpack_lite__WEBPACK_IMPORTED_MODULE_0__.encode(data)));
        }

        this.onopen = function() {
            //this.wsSend("sp");
            this.wsSend("0", Date.now());
        }

        this.onmessage = function(data) {
            data = (0,msgpack_lite__WEBPACK_IMPORTED_MODULE_0__.decode)(new Uint8Array(data.data));

            (0,_hooks_eventHook__WEBPACK_IMPORTED_MODULE_1__["default"])(data)
        }

        this.onerror = function(error) {
            console.error(error);
            alert("failed to connect to server. check the console and join the discord server to report this issue.")
        }
    }
}

/***/ }),

/***/ "./Game/configurations.js":
/*!********************************!*\
  !*** ./Game/configurations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animalTypes: () => (/* binding */ animalTypes),
/* harmony export */   buildingTypes: () => (/* binding */ buildingTypes),
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   foodTypes: () => (/* binding */ foodTypes),
/* harmony export */   packetMap: () => (/* binding */ packetMap),
/* harmony export */   weaponTypes: () => (/* binding */ weaponTypes)
/* harmony export */ });
/* harmony import */ var _Render_functions_makeImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render/functions/makeImage */ "./Game/Render/functions/makeImage.js");
/* harmony import */ var _UI_updateLeaderboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/updateLeaderboard */ "./Game/UI/updateLeaderboard.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_addGameObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/addGameObjects */ "./Game/WebSocket/hooks/eventHooks/addGameObjects.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_addPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/addPlayer */ "./Game/WebSocket/hooks/eventHooks/addPlayer.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_gatherAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/gatherAnimation */ "./Game/WebSocket/hooks/eventHooks/gatherAnimation.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_pingSocketResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/pingSocketResponse */ "./Game/WebSocket/hooks/eventHooks/pingSocketResponse.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_receiveChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/receiveChat */ "./Game/WebSocket/hooks/eventHooks/receiveChat.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_removePlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/removePlayer */ "./Game/WebSocket/hooks/eventHooks/removePlayer.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_updateAI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/updateAI */ "./Game/WebSocket/hooks/eventHooks/updateAI.js");
/* harmony import */ var _WebSocket_hooks_eventHooks_updatePlayers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebSocket/hooks/eventHooks/updatePlayers */ "./Game/WebSocket/hooks/eventHooks/updatePlayers.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mapScale: 6000,
    maxNameLength: 15,
    maxChatLength: 40,
    playerScale: 35,
    lineWidth: 5.5,
    maxScreenWidth: 1920,
    maxScreenHeight: 1080,
    maxPlayerHealth: 100,
    snowBiomeTop: 1000,
    serverUpdateRate: 9,
    riverWidth: 500,
    riverPadding: 20,
    waveSpeed: 0.0001,
    waveMax: 1.3,
    outlineColor: "#525252",
    textOutlineColor: "#3d3f42",
    nameY: 34,
    healthBarWidth: 55,
    healthBarPad: 4.5,
    chatCountdown: 4000,
    hitReturnRatio: 0.25,
    hitAngle: Math.PI / 2,
    wiggleIntensity: 20
});

const weaponTypes = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    desc: "tool for gathering all resources",
    img: (0,_Render_functions_makeImage__WEBPACK_IMPORTED_MODULE_0__["default"])("https://cdn.glitch.global/bcb2c609-6efd-4c0b-8eb7-183d579cc793/hammer_1.png"),
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
}]

const buildingTypes = [{
    id: 0,
    name: "wall",
    description: "protects your base from hostile aggressors",
    health: 400,
    scale: 40,
    hitResistance: 80, // it's kind of like a shield, the shield will slowly regenerate over time, and the building health won't be affected unless the shield is down
},
{
    id: 1,
    name: "baby spikes",
    description: "fortifies your base, knocks back hostile aggressors",
    health: 300,
    scale: 42,
    hitResistance: 20
}];

const animalTypes = [
    {
        id: 0,
        img: (0,_Render_functions_makeImage__WEBPACK_IMPORTED_MODULE_0__["default"])("https://cdn.glitch.global/bcb2c609-6efd-4c0b-8eb7-183d579cc793/cow.png"),
        killScore: 150,
        health: 500,
        weightM: 0.8,
        speed: 95e-5,
        turnSpeed: 0.001,
        scale: 72,
        drop: ["food", 50],
    },
    {
        id: 1,
        img: (0,_Render_functions_makeImage__WEBPACK_IMPORTED_MODULE_0__["default"])("https://cdn.glitch.global/bcb2c609-6efd-4c0b-8eb7-183d579cc793/pig.png"),
        killScore: 200,
        health: 800,
        weightM: 0.6,
        speed: 85e-5,
        turnSpeed: 0.001,
        scale: 72,
        drop: ["food", 80],
    },
];

const foodTypes = [{
    id: 0,
    name: "apple",
    heal: 10
},
{
    id: 1,
    name: "fly honeysuckle",
    heal: 60,
    slowEffect: 6000 // slowdown effect after eating (value is ms)
},
{
    id: 2,
    name: "pork",
    heal: 20,
    poisonEffect: 5000,
    haram: true // haram
}]

const packetMap = {
    1: _WebSocket_hooks_eventHooks_updatePlayers__WEBPACK_IMPORTED_MODULE_9__["default"],
    2: _WebSocket_hooks_eventHooks_addPlayer__WEBPACK_IMPORTED_MODULE_3__["default"],
    "r": _WebSocket_hooks_eventHooks_removePlayer__WEBPACK_IMPORTED_MODULE_7__["default"],
    6: _WebSocket_hooks_eventHooks_receiveChat__WEBPACK_IMPORTED_MODULE_6__["default"],
    0: _WebSocket_hooks_eventHooks_pingSocketResponse__WEBPACK_IMPORTED_MODULE_5__["default"],
    "a": _WebSocket_hooks_eventHooks_updateAI__WEBPACK_IMPORTED_MODULE_8__["default"],
    "l": _UI_updateLeaderboard__WEBPACK_IMPORTED_MODULE_1__["default"],
    "g": _WebSocket_hooks_eventHooks_addGameObjects__WEBPACK_IMPORTED_MODULE_2__["default"],
    "h": _WebSocket_hooks_eventHooks_gatherAnimation__WEBPACK_IMPORTED_MODULE_4__["default"]
};

const colors = {
    grasslands: "#b6db66",
    winter: "#fff",
    desert: "#dbc666",
    water: "#91b2db",
    autumn: "#ffb666",
    healthBarTeam: "#8ecc51",
    healthBarEnemy: "#cc5151"
}

/***/ }),

/***/ "./Game/main.js":
/*!**********************!*\
  !*** ./Game/main.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   keyHandler: () => (/* binding */ keyHandler),
/* harmony export */   mouseEvents: () => (/* binding */ mouseEvents)
/* harmony export */ });
/* harmony import */ var _Render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render/render */ "./Game/Render/render.js");
/* harmony import */ var _WebSocket_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebSocket/main */ "./Game/WebSocket/main.js");
/* harmony import */ var _UI_chatLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/chatLog */ "./Game/UI/chatLog.js");
/* harmony import */ var _UI_eventHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/eventHooks */ "./Game/UI/eventHooks.js");





class GameManager {
    constructor() {
        //this.eventLoop = setInterval(async () => {

        //});

        this.players = [];
        this.buildings = [];
        this.animals = [];
        this.projectiles = [];

        this.player = null;

        this.moveDirection = null;

        this.servers = {
            test: "wss://servertest-1-83we.onrender.com",
            miami: "wss://laughing-rotary-phone-4jw6qgq6w4pv3w6j-8080.app.github.dev/",
            eu: "wss://opulent-chainsaw-jjq9r4r9q6xv2pv5x-8080.app.github.dev/",
            asia: "wss://shiny-happiness-v6rgv6pp9rjjc6xrg-8080.app.github.dev/",
            scilicon: "wss://fictional-chainsaw-wr597rvvpqxg39r55-8080.app.github.dev/",
            dev: "wss://curious-petal-watchmaker.glitch.me"
        };

        this.serverURL = this.servers.dev;

        //let serverurl = prompt("enter server region. available regions: miami, eu, asia, scilicon, dev. (MAKE SURE TO TYPE THE OPTIONS EXACTLY)!")

        // create WebSocket ASAP, so spawning will have as little delay as possible
        this.webSocket = null; //new Socket(servers[serverurl]/*"wss://curious-petal-watchmaker.glitch.me"*/); // pls buy vps
        //this.webSocket.binaryType = "arraybuffer";

        // this is some other random stuff
        this.lockDir = false;
    }

    changeRegion(region) {
        this.serverURL = this.servers[region];
    }

    spawn() {
        this.webSocket = new _WebSocket_main__WEBPACK_IMPORTED_MODULE_1__["default"](this.serverURL);
        this.webSocket.binaryType = "arraybuffer";

        this.webSocket.onopen = () => {
            this.webSocket.wsSend("sp", _UI_eventHooks__WEBPACK_IMPORTED_MODULE_3__.nameInput.value);

            _UI_eventHooks__WEBPACK_IMPORTED_MODULE_3__.mainMenu.style.display = "none";
        };

        (0,_UI_chatLog__WEBPACK_IMPORTED_MODULE_2__["default"])("Game", "spawning in " + this.serverURL)
    }

    // maybe compact into one method
    getPlayerBySid(sid) {
        return this.players.find(player => player.sid == sid);
    }

    getBuildingBySid(sid) {
        return this.buildings.find(building => building.sid == sid);
    }

    getAnimalBySid(sid) {
        return this.animals.find(animal => animal.sid == sid);
    }

    close(reason) {
        console.warn(reason);
        alert(reason);
    }
}

const Game = new GameManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

let lastTime = Date.now();
let frameDate = Date.now();
function runAtDrawTime() {
    frameDate = Date.now();
    let delta = frameDate - lastTime;

    (0,_Render_render__WEBPACK_IMPORTED_MODULE_0__["default"])(delta, frameDate);

    lastTime = frameDate;

    requestAnimationFrame(runAtDrawTime);
}

runAtDrawTime();


// do later now
class KeyHandler {
    constructor() {
        document.addEventListener("keydown", (event) => {
            this.handleKeyDown(event.keyCode);
        });

        document.addEventListener("keyup", (event) => {
            this.handleKeyUp(event.keyCode);
        });

        this.moveKey = {
            87: [0, -1],
            38: [0, -1],
            83: [0, 1],
            40: [0, 1],
            65: [-1, 0],
            37: [-1, 0],
            68: [1, 0],
            39: [1, 0],
        };

        this.moveKeysPressed = {};
        this.angle = undefined;

        this.chatToggle = false;
        this.chat = document.getElementById("chatbox");
    }

    handleKeyDown(keyCode) {
        if (this.moveKey[keyCode] && !this.chatToggle) {
            this.moveKeysPressed[keyCode] = true;
        }
        this.updateAngle();

        if(keyCode == 13) {
            if(!this.chatToggle) {
                this.chat.style.display = "block";
                this.chatToggle = true;
                this.chat.focus();
            } else {
                Game.webSocket.wsSend("6", this.chat.value);
                this.chat.value = "";
                this.chat.style.display = "none";
                this.chatToggle = false;
            }
        }

        switch(keyCode) {
            case 88: // "x"
                Game.webSocket.wsSend("h", 0);
                console.warn("lock dir");
                Game.lockDir = !Game.lockDir;
                break;

            case 69:
                Game.webSocket.wsSend("h", 1);
                console.warn("okok");

                break;
            
            default: break;
        }
    }

    handleKeyUp(keyCode) {
        if (this.moveKey[keyCode]) {
            delete this.moveKeysPressed[keyCode];
        }
        this.updateAngle();
    }

    updateAngle() {
        let moveX = 0;
        let moveY = 0;

        for (let keyCode in this.moveKeysPressed) {
            const direction = this.moveKey[keyCode];
            moveX += direction[0];
            moveY += direction[1];
        }

        if (Object.keys(this.moveKeysPressed).length === 0) {
            this.angle = undefined;
        } else {
            this.angle = Math.atan2(moveY, moveX);
        }
    }
}

const keyHandler = new KeyHandler;

class Mouse {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;

        this.mouseDown = {
            left: false,
            right: false,
            middle: false
        };

        document.addEventListener("mousemove", (event) => {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        });

        document.addEventListener("mousedown", (event) => this.handleMouseDown(event));
        document.addEventListener("mouseup", (event) => this.handleMouseUp(event));
    }

    handleMouseDown(event) {
        if (event.button === 0) {
            this.mouseDown.left = true;
        } else if (event.button === 1) {
            this.mouseDown.middle = true;
        } else if (event.button === 2) {
            this.mouseDown.right = true;
        }

        Game.webSocket.wsSend("h", 1);
    }

    handleMouseUp(event) {
        if (event.button === 0) {
            this.mouseDown.left = false;
        } else if (event.button === 1) {
            this.mouseDown.middle = false;
        } else if (event.button === 2) {
            this.mouseDown.right = false;
        }

        Game.webSocket.wsSend("h", 1);
    }
}

const mouseEvents = new Mouse;

(0,_UI_eventHooks__WEBPACK_IMPORTED_MODULE_3__["default"])();
window.oncontextmenu = e => e.preventDefault(); 

/***/ }),

/***/ "./node_modules/event-lite/event-lite.js":
/*!***********************************************!*\
  !*** ./node_modules/event-lite/event-lite.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */

function EventLite() {
  if (!(this instanceof EventLite)) return new EventLite();
}

(function(EventLite) {
  // export the class for node.js
  if (true) module.exports = EventLite;

  // property name to hold listeners
  var LISTENERS = "listeners";

  // methods to export
  var methods = {
    on: on,
    once: once,
    off: off,
    emit: emit
  };

  // mixin to self
  mixin(EventLite.prototype);

  // export mixin function
  EventLite.mixin = mixin;

  /**
   * Import on(), once(), off() and emit() methods into target object.
   *
   * @function EventLite.mixin
   * @param target {Prototype}
   */

  function mixin(target) {
    for (var key in methods) {
      target[key] = methods[key];
    }
    return target;
  }

  /**
   * Add an event listener.
   *
   * @function EventLite.prototype.on
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function on(type, func) {
    getListeners(this, type).push(func);
    return this;
  }

  /**
   * Add one-time event listener.
   *
   * @function EventLite.prototype.once
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function once(type, func) {
    var that = this;
    wrap.originalListener = func;
    getListeners(that, type).push(wrap);
    return that;

    function wrap() {
      off.call(that, type, wrap);
      func.apply(this, arguments);
    }
  }

  /**
   * Remove an event listener.
   *
   * @function EventLite.prototype.off
   * @param [type] {string}
   * @param [func] {Function}
   * @returns {EventLite} Self for method chaining
   */

  function off(type, func) {
    var that = this;
    var listners;
    if (!arguments.length) {
      delete that[LISTENERS];
    } else if (!func) {
      listners = that[LISTENERS];
      if (listners) {
        delete listners[type];
        if (!Object.keys(listners).length) return off.call(that);
      }
    } else {
      listners = getListeners(that, type, true);
      if (listners) {
        listners = listners.filter(ne);
        if (!listners.length) return off.call(that, type);
        that[LISTENERS][type] = listners;
      }
    }
    return that;

    function ne(test) {
      return test !== func && test.originalListener !== func;
    }
  }

  /**
   * Dispatch (trigger) an event.
   *
   * @function EventLite.prototype.emit
   * @param type {string}
   * @param [value] {*}
   * @returns {boolean} True when a listener received the event
   */

  function emit(type, value) {
    var that = this;
    var listeners = getListeners(that, type, true);
    if (!listeners) return false;
    var arglen = arguments.length;
    if (arglen === 1) {
      listeners.forEach(zeroarg);
    } else if (arglen === 2) {
      listeners.forEach(onearg);
    } else {
      var args = Array.prototype.slice.call(arguments, 1);
      listeners.forEach(moreargs);
    }
    return !!listeners.length;

    function zeroarg(func) {
      func.call(that);
    }

    function onearg(func) {
      func.call(that, value);
    }

    function moreargs(func) {
      func.apply(that, args);
    }
  }

  /**
   * @ignore
   */

  function getListeners(that, type, readonly) {
    if (readonly && !that[LISTENERS]) return;
    var listeners = that[LISTENERS] || (that[LISTENERS] = {});
    return listeners[type] || (listeners[type] = []);
  }

})(EventLite);


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/int64-buffer/int64-buffer.js":
/*!***************************************************!*\
  !*** ./node_modules/int64-buffer/int64-buffer.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

// int64-buffer.js

/*jshint -W018 */ // Confusing use of '!'.
/*jshint -W030 */ // Expected an assignment or function call and instead saw an expression.
/*jshint -W093 */ // Did you mean to return a conditional instead of an assignment?

var Uint64BE, Int64BE, Uint64LE, Int64LE;

!function(exports) {
  // constants

  var UNDEFINED = "undefined";
  var BUFFER = (UNDEFINED !== typeof Buffer) && Buffer;
  var UINT8ARRAY = (UNDEFINED !== typeof Uint8Array) && Uint8Array;
  var ARRAYBUFFER = (UNDEFINED !== typeof ArrayBuffer) && ArrayBuffer;
  var ZERO = [0, 0, 0, 0, 0, 0, 0, 0];
  var isArray = Array.isArray || _isArray;
  var BIT32 = 4294967296;
  var BIT24 = 16777216;

  // storage class

  var storage; // Array;

  // generate classes

  Uint64BE = factory("Uint64BE", true, true);
  Int64BE = factory("Int64BE", true, false);
  Uint64LE = factory("Uint64LE", false, true);
  Int64LE = factory("Int64LE", false, false);

  // class factory

  function factory(name, bigendian, unsigned) {
    var posH = bigendian ? 0 : 4;
    var posL = bigendian ? 4 : 0;
    var pos0 = bigendian ? 0 : 3;
    var pos1 = bigendian ? 1 : 2;
    var pos2 = bigendian ? 2 : 1;
    var pos3 = bigendian ? 3 : 0;
    var fromPositive = bigendian ? fromPositiveBE : fromPositiveLE;
    var fromNegative = bigendian ? fromNegativeBE : fromNegativeLE;
    var proto = Int64.prototype;
    var isName = "is" + name;
    var _isInt64 = "_" + isName;

    // properties
    proto.buffer = void 0;
    proto.offset = 0;
    proto[_isInt64] = true;

    // methods
    proto.toNumber = toNumber;
    proto.toString = toString;
    proto.toJSON = toNumber;
    proto.toArray = toArray;

    // add .toBuffer() method only when Buffer available
    if (BUFFER) proto.toBuffer = toBuffer;

    // add .toArrayBuffer() method only when Uint8Array available
    if (UINT8ARRAY) proto.toArrayBuffer = toArrayBuffer;

    // isUint64BE, isInt64BE
    Int64[isName] = isInt64;

    // CommonJS
    exports[name] = Int64;

    return Int64;

    // constructor
    function Int64(buffer, offset, value, raddix) {
      if (!(this instanceof Int64)) return new Int64(buffer, offset, value, raddix);
      return init(this, buffer, offset, value, raddix);
    }

    // isUint64BE, isInt64BE
    function isInt64(b) {
      return !!(b && b[_isInt64]);
    }

    // initializer
    function init(that, buffer, offset, value, raddix) {
      if (UINT8ARRAY && ARRAYBUFFER) {
        if (buffer instanceof ARRAYBUFFER) buffer = new UINT8ARRAY(buffer);
        if (value instanceof ARRAYBUFFER) value = new UINT8ARRAY(value);
      }

      // Int64BE() style
      if (!buffer && !offset && !value && !storage) {
        // shortcut to initialize with zero
        that.buffer = newArray(ZERO, 0);
        return;
      }

      // Int64BE(value, raddix) style
      if (!isValidBuffer(buffer, offset)) {
        var _storage = storage || Array;
        raddix = offset;
        value = buffer;
        offset = 0;
        buffer = new _storage(8);
      }

      that.buffer = buffer;
      that.offset = offset |= 0;

      // Int64BE(buffer, offset) style
      if (UNDEFINED === typeof value) return;

      // Int64BE(buffer, offset, value, raddix) style
      if ("string" === typeof value) {
        fromString(buffer, offset, value, raddix || 10);
      } else if (isValidBuffer(value, raddix)) {
        fromArray(buffer, offset, value, raddix);
      } else if ("number" === typeof raddix) {
        writeInt32(buffer, offset + posH, value); // high
        writeInt32(buffer, offset + posL, raddix); // low
      } else if (value > 0) {
        fromPositive(buffer, offset, value); // positive
      } else if (value < 0) {
        fromNegative(buffer, offset, value); // negative
      } else {
        fromArray(buffer, offset, ZERO, 0); // zero, NaN and others
      }
    }

    function fromString(buffer, offset, str, raddix) {
      var pos = 0;
      var len = str.length;
      var high = 0;
      var low = 0;
      if (str[0] === "-") pos++;
      var sign = pos;
      while (pos < len) {
        var chr = parseInt(str[pos++], raddix);
        if (!(chr >= 0)) break; // NaN
        low = low * raddix + chr;
        high = high * raddix + Math.floor(low / BIT32);
        low %= BIT32;
      }
      if (sign) {
        high = ~high;
        if (low) {
          low = BIT32 - low;
        } else {
          high++;
        }
      }
      writeInt32(buffer, offset + posH, high);
      writeInt32(buffer, offset + posL, low);
    }

    function toNumber() {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      if (!unsigned) high |= 0; // a trick to get signed
      return high ? (high * BIT32 + low) : low;
    }

    function toString(radix) {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      var str = "";
      var sign = !unsigned && (high & 0x80000000);
      if (sign) {
        high = ~high;
        low = BIT32 - low;
      }
      radix = radix || 10;
      while (1) {
        var mod = (high % radix) * BIT32 + low;
        high = Math.floor(high / radix);
        low = Math.floor(mod / radix);
        str = (mod % radix).toString(radix) + str;
        if (!high && !low) break;
      }
      if (sign) {
        str = "-" + str;
      }
      return str;
    }

    function writeInt32(buffer, offset, value) {
      buffer[offset + pos3] = value & 255;
      value = value >> 8;
      buffer[offset + pos2] = value & 255;
      value = value >> 8;
      buffer[offset + pos1] = value & 255;
      value = value >> 8;
      buffer[offset + pos0] = value & 255;
    }

    function readInt32(buffer, offset) {
      return (buffer[offset + pos0] * BIT24) +
        (buffer[offset + pos1] << 16) +
        (buffer[offset + pos2] << 8) +
        buffer[offset + pos3];
    }
  }

  function toArray(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = null; // Array
    if (raw !== false && offset === 0 && buffer.length === 8 && isArray(buffer)) return buffer;
    return newArray(buffer, offset);
  }

  function toBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = BUFFER;
    if (raw !== false && offset === 0 && buffer.length === 8 && Buffer.isBuffer(buffer)) return buffer;
    var dest = new BUFFER(8);
    fromArray(dest, 0, buffer, offset);
    return dest;
  }

  function toArrayBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    var arrbuf = buffer.buffer;
    storage = UINT8ARRAY;
    if (raw !== false && offset === 0 && (arrbuf instanceof ARRAYBUFFER) && arrbuf.byteLength === 8) return arrbuf;
    var dest = new UINT8ARRAY(8);
    fromArray(dest, 0, buffer, offset);
    return dest.buffer;
  }

  function isValidBuffer(buffer, offset) {
    var len = buffer && buffer.length;
    offset |= 0;
    return len && (offset + 8 <= len) && ("string" !== typeof buffer[offset]);
  }

  function fromArray(destbuf, destoff, srcbuf, srcoff) {
    destoff |= 0;
    srcoff |= 0;
    for (var i = 0; i < 8; i++) {
      destbuf[destoff++] = srcbuf[srcoff++] & 255;
    }
  }

  function newArray(buffer, offset) {
    return Array.prototype.slice.call(buffer, offset, offset + 8);
  }

  function fromPositiveBE(buffer, offset, value) {
    var pos = offset + 8;
    while (pos > offset) {
      buffer[--pos] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeBE(buffer, offset, value) {
    var pos = offset + 8;
    value++;
    while (pos > offset) {
      buffer[--pos] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  function fromPositiveLE(buffer, offset, value) {
    var end = offset + 8;
    while (offset < end) {
      buffer[offset++] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeLE(buffer, offset, value) {
    var end = offset + 8;
    value++;
    while (offset < end) {
      buffer[offset++] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  // https://github.com/retrofox/is-array
  function _isArray(val) {
    return !!val && "[object Array]" == Object.prototype.toString.call(val);
  }

}( true && typeof exports.nodeName !== 'string' ? exports : (this || {}));


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/browser.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// browser.js

exports.encode = __webpack_require__(/*! ./encode */ "./node_modules/msgpack-lite/lib/encode.js").encode;
exports.decode = __webpack_require__(/*! ./decode */ "./node_modules/msgpack-lite/lib/decode.js").decode;

exports.Encoder = __webpack_require__(/*! ./encoder */ "./node_modules/msgpack-lite/lib/encoder.js").Encoder;
exports.Decoder = __webpack_require__(/*! ./decoder */ "./node_modules/msgpack-lite/lib/decoder.js").Decoder;

exports.createCodec = __webpack_require__(/*! ./ext */ "./node_modules/msgpack-lite/lib/ext.js").createCodec;
exports.codec = __webpack_require__(/*! ./codec */ "./node_modules/msgpack-lite/lib/codec.js").codec;


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/buffer-global.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/buffer-global.js ***!
  \********************************************************/
/***/ (function(module) {

/* globals Buffer */

module.exports =
  c(("undefined" !== typeof Buffer) && Buffer) ||
  c(this.Buffer) ||
  c(("undefined" !== typeof window) && window.Buffer) ||
  this.Buffer;

function c(B) {
  return B && B.isBuffer && B;
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/buffer-lite.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/buffer-lite.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// buffer-lite.js

var MAXBUFLEN = 8192;

exports.copy = copy;
exports.toString = toString;
exports.write = write;

/**
 * Buffer.prototype.write()
 *
 * @param string {String}
 * @param [offset] {Number}
 * @returns {Number}
 */

function write(string, offset) {
  var buffer = this;
  var index = offset || (offset |= 0);
  var length = string.length;
  var chr = 0;
  var i = 0;
  while (i < length) {
    chr = string.charCodeAt(i++);

    if (chr < 128) {
      buffer[index++] = chr;
    } else if (chr < 0x800) {
      // 2 bytes
      buffer[index++] = 0xC0 | (chr >>> 6);
      buffer[index++] = 0x80 | (chr & 0x3F);
    } else if (chr < 0xD800 || chr > 0xDFFF) {
      // 3 bytes
      buffer[index++] = 0xE0 | (chr  >>> 12);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    } else {
      // 4 bytes - surrogate pair
      chr = (((chr - 0xD800) << 10) | (string.charCodeAt(i++) - 0xDC00)) + 0x10000;
      buffer[index++] = 0xF0 | (chr >>> 18);
      buffer[index++] = 0x80 | ((chr >>> 12) & 0x3F);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    }
  }
  return index - offset;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var buffer = this;
  var index = start|0;
  if (!end) end = buffer.length;
  var string = '';
  var chr = 0;

  while (index < end) {
    chr = buffer[index++];
    if (chr < 128) {
      string += String.fromCharCode(chr);
      continue;
    }

    if ((chr & 0xE0) === 0xC0) {
      // 2 bytes
      chr = (chr & 0x1F) << 6 |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF0) === 0xE0) {
      // 3 bytes
      chr = (chr & 0x0F)             << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF8) === 0xF0) {
      // 4 bytes
      chr = (chr & 0x07)             << 18 |
            (buffer[index++] & 0x3F) << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);
    }

    if (chr >= 0x010000) {
      // A surrogate pair
      chr -= 0x010000;

      string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
    } else {
      string += String.fromCharCode(chr);
    }
  }

  return string;
}

/**
 * Buffer.prototype.copy()
 *
 * @param target {Buffer}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {number}
 */

function copy(target, targetStart, start, end) {
  var i;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!targetStart) targetStart = 0;
  var len = end - start;

  if (target === this && start < targetStart && targetStart < end) {
    // descending
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    // ascending
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start];
    }
  }

  return len;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = alloc(0);

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Array}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Array
  return Array.prototype.slice.call(value);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-buffer.js":
/*!***********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-buffer.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-buffer.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var exports = module.exports = Bufferish.hasBuffer ? alloc(0) : [];

exports.alloc = Bufferish.hasBuffer && Buffer.alloc || alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Buffer(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Buffer
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Buffer
  if (Buffer.from && Buffer.from.length !== 1) {
    return Buffer.from(value); // node v6+
  } else {
    return new Buffer(value); // node v4
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-proto.js":
/*!**********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-proto.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish-proto.js

/* jshint eqnull:true */

var BufferLite = __webpack_require__(/*! ./buffer-lite */ "./node_modules/msgpack-lite/lib/buffer-lite.js");

exports.copy = copy;
exports.slice = slice;
exports.toString = toString;
exports.write = gen("write");

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var isBufferShim = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var brokenTypedArray = isBufferShim && !Buffer.TYPED_ARRAY_SUPPORT;

/**
 * @param target {Buffer|Uint8Array|Array}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function copy(target, targetStart, start, end) {
  var thisIsBuffer = Bufferish.isBuffer(this);
  var targetIsBuffer = Bufferish.isBuffer(target);
  if (thisIsBuffer && targetIsBuffer) {
    // Buffer to Buffer
    return this.copy(target, targetStart, start, end);
  } else if (!brokenTypedArray && !thisIsBuffer && !targetIsBuffer &&
    Bufferish.isView(this) && Bufferish.isView(target)) {
    // Uint8Array to Uint8Array (except for minor some browsers)
    var buffer = (start || end != null) ? slice.call(this, start, end) : this;
    target.set(buffer, targetStart);
    return buffer.length;
  } else {
    // other cases
    return BufferLite.copy.call(this, target, targetStart, start, end);
  }
}

/**
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function slice(start, end) {
  // for Buffer, Uint8Array (except for minor some browsers) and Array
  var f = this.slice || (!brokenTypedArray && this.subarray);
  if (f) return f.call(this, start, end);

  // Uint8Array (for minor some browsers)
  var target = Bufferish.alloc.call(this, end - start);
  copy.call(this, target, 0, start, end);
  return target;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var f = (!isBufferShim && Bufferish.isBuffer(this)) ? this.toString : BufferLite.toString;
  return f.apply(this, arguments);
}

/**
 * @private
 */

function gen(method) {
  return wrap;

  function wrap() {
    var f = this[method] || BufferLite[method];
    return f.apply(this, arguments);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-uint8array.js":
/*!***************************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-uint8array.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-uint8array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = Bufferish.hasArrayBuffer ? alloc(0) : [];

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Uint8Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Uint8Array}
 */

function from(value) {
  if (Bufferish.isView(value)) {
    // TypedArray to ArrayBuffer
    var byteOffset = value.byteOffset;
    var byteLength = value.byteLength;
    value = value.buffer;
    if (value.byteLength !== byteLength) {
      if (value.slice) {
        value = value.slice(byteOffset, byteOffset + byteLength);
      } else {
        // Android 4.1 does not have ArrayBuffer.prototype.slice
        value = new Uint8Array(value);
        if (value.byteLength !== byteLength) {
          // TypedArray to ArrayBuffer to Uint8Array to Array
          value = Array.prototype.slice.call(value, byteOffset, byteOffset + byteLength);
        }
      }
    }
  } else if (typeof value === "string") {
    // String to Uint8Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  return new Uint8Array(value);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish.js":
/*!****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish.js

var Buffer = exports.global = __webpack_require__(/*! ./buffer-global */ "./node_modules/msgpack-lite/lib/buffer-global.js");
var hasBuffer = exports.hasBuffer = Buffer && !!Buffer.isBuffer;
var hasArrayBuffer = exports.hasArrayBuffer = ("undefined" !== typeof ArrayBuffer);

var isArray = exports.isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
exports.isArrayBuffer = hasArrayBuffer ? isArrayBuffer : _false;
var isBuffer = exports.isBuffer = hasBuffer ? Buffer.isBuffer : _false;
var isView = exports.isView = hasArrayBuffer ? (ArrayBuffer.isView || _is("ArrayBuffer", "buffer")) : _false;

exports.alloc = alloc;
exports.concat = concat;
exports.from = from;

var BufferArray = exports.Array = __webpack_require__(/*! ./bufferish-array */ "./node_modules/msgpack-lite/lib/bufferish-array.js");
var BufferBuffer = exports.Buffer = __webpack_require__(/*! ./bufferish-buffer */ "./node_modules/msgpack-lite/lib/bufferish-buffer.js");
var BufferUint8Array = exports.Uint8Array = __webpack_require__(/*! ./bufferish-uint8array */ "./node_modules/msgpack-lite/lib/bufferish-uint8array.js");
var BufferProto = exports.prototype = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer|Uint8Array|Array}
 */

function from(value) {
  if (typeof value === "string") {
    return fromString.call(this, value);
  } else {
    return auto(this).from(value);
  }
}

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return auto(this).alloc(size);
}

/**
 * @param list {Array} array of (Buffer|Uint8Array|Array)s
 * @param [length]
 * @returns {Buffer|Uint8Array|Array}
 */

function concat(list, length) {
  if (!length) {
    length = 0;
    Array.prototype.forEach.call(list, dryrun);
  }
  var ref = (this !== exports) && this || list[0];
  var result = alloc.call(ref, length);
  var offset = 0;
  Array.prototype.forEach.call(list, append);
  return result;

  function dryrun(buffer) {
    length += buffer.length;
  }

  function append(buffer) {
    offset += BufferProto.copy.call(buffer, result, offset);
  }
}

var _isArrayBuffer = _is("ArrayBuffer");

function isArrayBuffer(value) {
  return (value instanceof ArrayBuffer) || _isArrayBuffer(value);
}

/**
 * @private
 */

function fromString(value) {
  var expected = value.length * 3;
  var that = alloc.call(this, expected);
  var actual = BufferProto.write.call(that, value);
  if (expected !== actual) {
    that = BufferProto.slice.call(that, 0, actual);
  }
  return that;
}

function auto(that) {
  return isBuffer(that) ? BufferBuffer
    : isView(that) ? BufferUint8Array
    : isArray(that) ? BufferArray
    : hasBuffer ? BufferBuffer
    : hasArrayBuffer ? BufferUint8Array
    : BufferArray;
}

function _false() {
  return false;
}

function _is(name, key) {
  /* jshint eqnull:true */
  name = "[object " + name + "]";
  return function(value) {
    return (value != null) && {}.toString.call(key ? value[key] : value) === name;
  };
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/codec-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/codec-base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec-base.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.createCodec = createCodec;
exports.install = install;
exports.filter = filter;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

function Codec(options) {
  if (!(this instanceof Codec)) return new Codec(options);
  this.options = options;
  this.init();
}

Codec.prototype.init = function() {
  var options = this.options;

  if (options && options.uint8array) {
    this.bufferish = Bufferish.Uint8Array;
  }

  return this;
};

function install(props) {
  for (var key in props) {
    Codec.prototype[key] = add(Codec.prototype[key], props[key]);
  }
}

function add(a, b) {
  return (a && b) ? ab : (a || b);

  function ab() {
    a.apply(this, arguments);
    return b.apply(this, arguments);
  }
}

function join(filters) {
  filters = filters.slice();

  return function(value) {
    return filters.reduce(iterator, value);
  };

  function iterator(value, filter) {
    return filter(value);
  }
}

function filter(filter) {
  return IS_ARRAY(filter) ? join(filter) : filter;
}

// @public
// msgpack.createCodec()

function createCodec(options) {
  return new Codec(options);
}

// default shared codec

exports.preset = createCodec({preset: true});


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/codec.js":
/*!************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/codec.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js");

// @public
// msgpack.codec.preset

exports.codec = {
  preset: (__webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js").preset)
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decode-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decode-buffer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode-buffer.js

exports.DecodeBuffer = DecodeBuffer;

var preset = (__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js").preset);

var FlexDecoder = (__webpack_require__(/*! ./flex-buffer */ "./node_modules/msgpack-lite/lib/flex-buffer.js").FlexDecoder);

FlexDecoder.mixin(DecodeBuffer.prototype);

function DecodeBuffer(options) {
  if (!(this instanceof DecodeBuffer)) return new DecodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

DecodeBuffer.prototype.codec = preset;

DecodeBuffer.prototype.fetch = function() {
  return this.codec.decode(this);
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decode.js":
/*!*************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode.js

exports.decode = decode;

var DecodeBuffer = (__webpack_require__(/*! ./decode-buffer */ "./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer);

function decode(input, options) {
  var decoder = new DecodeBuffer(options);
  decoder.write(input);
  return decoder.read();
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decoder.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decoder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decoder.js

exports.Decoder = Decoder;

var EventLite = __webpack_require__(/*! event-lite */ "./node_modules/event-lite/event-lite.js");
var DecodeBuffer = (__webpack_require__(/*! ./decode-buffer */ "./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer);

function Decoder(options) {
  if (!(this instanceof Decoder)) return new Decoder(options);
  DecodeBuffer.call(this, options);
}

Decoder.prototype = new DecodeBuffer();

EventLite.mixin(Decoder.prototype);

Decoder.prototype.decode = function(chunk) {
  if (arguments.length) this.write(chunk);
  this.flush();
};

Decoder.prototype.push = function(chunk) {
  this.emit("data", chunk);
};

Decoder.prototype.end = function(chunk) {
  this.decode(chunk);
  this.emit("end");
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encode-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encode-buffer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode-buffer.js

exports.EncodeBuffer = EncodeBuffer;

var preset = (__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js").preset);

var FlexEncoder = (__webpack_require__(/*! ./flex-buffer */ "./node_modules/msgpack-lite/lib/flex-buffer.js").FlexEncoder);

FlexEncoder.mixin(EncodeBuffer.prototype);

function EncodeBuffer(options) {
  if (!(this instanceof EncodeBuffer)) return new EncodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

EncodeBuffer.prototype.codec = preset;

EncodeBuffer.prototype.write = function(input) {
  this.codec.encode(this, input);
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encode.js":
/*!*************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode.js

exports.encode = encode;

var EncodeBuffer = (__webpack_require__(/*! ./encode-buffer */ "./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer);

function encode(input, options) {
  var encoder = new EncodeBuffer(options);
  encoder.write(input);
  return encoder.read();
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encoder.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encoder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encoder.js

exports.Encoder = Encoder;

var EventLite = __webpack_require__(/*! event-lite */ "./node_modules/event-lite/event-lite.js");
var EncodeBuffer = (__webpack_require__(/*! ./encode-buffer */ "./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer);

function Encoder(options) {
  if (!(this instanceof Encoder)) return new Encoder(options);
  EncodeBuffer.call(this, options);
}

Encoder.prototype = new EncodeBuffer();

EventLite.mixin(Encoder.prototype);

Encoder.prototype.encode = function(chunk) {
  this.write(chunk);
  this.emit("data", this.read());
};

Encoder.prototype.end = function(chunk) {
  if (arguments.length) this.encode(chunk);
  this.flush();
  this.emit("end");
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-buffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-buffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-buffer.js

exports.ExtBuffer = ExtBuffer;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

function ExtBuffer(buffer, type) {
  if (!(this instanceof ExtBuffer)) return new ExtBuffer(buffer, type);
  this.buffer = Bufferish.from(buffer);
  this.type = type;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-packer.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-packer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-packer.js

exports.setExtPackers = setExtPackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var packTypedArray = Bufferish.Uint8Array.from;
var _encode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtPackers(codec) {
  codec.addExtPacker(0x0E, Error, [packError, encode]);
  codec.addExtPacker(0x01, EvalError, [packError, encode]);
  codec.addExtPacker(0x02, RangeError, [packError, encode]);
  codec.addExtPacker(0x03, ReferenceError, [packError, encode]);
  codec.addExtPacker(0x04, SyntaxError, [packError, encode]);
  codec.addExtPacker(0x05, TypeError, [packError, encode]);
  codec.addExtPacker(0x06, URIError, [packError, encode]);

  codec.addExtPacker(0x0A, RegExp, [packRegExp, encode]);
  codec.addExtPacker(0x0B, Boolean, [packValueOf, encode]);
  codec.addExtPacker(0x0C, String, [packValueOf, encode]);
  codec.addExtPacker(0x0D, Date, [Number, encode]);
  codec.addExtPacker(0x0F, Number, [packValueOf, encode]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtPacker(0x11, Int8Array, packTypedArray);
    codec.addExtPacker(0x12, Uint8Array, packTypedArray);
    codec.addExtPacker(0x13, Int16Array, packTypedArray);
    codec.addExtPacker(0x14, Uint16Array, packTypedArray);
    codec.addExtPacker(0x15, Int32Array, packTypedArray);
    codec.addExtPacker(0x16, Uint32Array, packTypedArray);
    codec.addExtPacker(0x17, Float32Array, packTypedArray);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtPacker(0x18, Float64Array, packTypedArray);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtPacker(0x19, Uint8ClampedArray, packTypedArray);
    }

    codec.addExtPacker(0x1A, ArrayBuffer, packTypedArray);
    codec.addExtPacker(0x1D, DataView, packTypedArray);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtPacker(0x1B, Buffer, Bufferish.from);
  }
}

function encode(input) {
  if (!_encode) _encode = (__webpack_require__(/*! ./encode */ "./node_modules/msgpack-lite/lib/encode.js").encode); // lazy load
  return _encode(input);
}

function packValueOf(value) {
  return (value).valueOf();
}

function packRegExp(value) {
  value = RegExp.prototype.toString.call(value).split("/");
  value.shift();
  var out = [value.pop()];
  out.unshift(value.join("/"));
  return out;
}

function packError(value) {
  var out = {};
  for (var key in ERROR_COLUMNS) {
    out[key] = value[key];
  }
  return out;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-unpacker.js":
/*!*******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-unpacker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-unpacker.js

exports.setExtUnpackers = setExtUnpackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var _decode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtUnpackers(codec) {
  codec.addExtUnpacker(0x0E, [decode, unpackError(Error)]);
  codec.addExtUnpacker(0x01, [decode, unpackError(EvalError)]);
  codec.addExtUnpacker(0x02, [decode, unpackError(RangeError)]);
  codec.addExtUnpacker(0x03, [decode, unpackError(ReferenceError)]);
  codec.addExtUnpacker(0x04, [decode, unpackError(SyntaxError)]);
  codec.addExtUnpacker(0x05, [decode, unpackError(TypeError)]);
  codec.addExtUnpacker(0x06, [decode, unpackError(URIError)]);

  codec.addExtUnpacker(0x0A, [decode, unpackRegExp]);
  codec.addExtUnpacker(0x0B, [decode, unpackClass(Boolean)]);
  codec.addExtUnpacker(0x0C, [decode, unpackClass(String)]);
  codec.addExtUnpacker(0x0D, [decode, unpackClass(Date)]);
  codec.addExtUnpacker(0x0F, [decode, unpackClass(Number)]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtUnpacker(0x11, unpackClass(Int8Array));
    codec.addExtUnpacker(0x12, unpackClass(Uint8Array));
    codec.addExtUnpacker(0x13, [unpackArrayBuffer, unpackClass(Int16Array)]);
    codec.addExtUnpacker(0x14, [unpackArrayBuffer, unpackClass(Uint16Array)]);
    codec.addExtUnpacker(0x15, [unpackArrayBuffer, unpackClass(Int32Array)]);
    codec.addExtUnpacker(0x16, [unpackArrayBuffer, unpackClass(Uint32Array)]);
    codec.addExtUnpacker(0x17, [unpackArrayBuffer, unpackClass(Float32Array)]);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtUnpacker(0x18, [unpackArrayBuffer, unpackClass(Float64Array)]);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtUnpacker(0x19, unpackClass(Uint8ClampedArray));
    }

    codec.addExtUnpacker(0x1A, unpackArrayBuffer);
    codec.addExtUnpacker(0x1D, [unpackArrayBuffer, unpackClass(DataView)]);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtUnpacker(0x1B, unpackClass(Buffer));
  }
}

function decode(input) {
  if (!_decode) _decode = (__webpack_require__(/*! ./decode */ "./node_modules/msgpack-lite/lib/decode.js").decode); // lazy load
  return _decode(input);
}

function unpackRegExp(value) {
  return RegExp.apply(null, value);
}

function unpackError(Class) {
  return function(value) {
    var out = new Class();
    for (var key in ERROR_COLUMNS) {
      out[key] = value[key];
    }
    return out;
  };
}

function unpackClass(Class) {
  return function(value) {
    return new Class(value);
  };
}

function unpackArrayBuffer(value) {
  return (new Uint8Array(value)).buffer;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext.js":
/*!**********************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js");

exports.createCodec = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js").createCodec;


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/flex-buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/flex-buffer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// flex-buffer.js

exports.FlexDecoder = FlexDecoder;
exports.FlexEncoder = FlexEncoder;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var MIN_BUFFER_SIZE = 2048;
var MAX_BUFFER_SIZE = 65536;
var BUFFER_SHORTAGE = "BUFFER_SHORTAGE";

function FlexDecoder() {
  if (!(this instanceof FlexDecoder)) return new FlexDecoder();
}

function FlexEncoder() {
  if (!(this instanceof FlexEncoder)) return new FlexEncoder();
}

FlexDecoder.mixin = mixinFactory(getDecoderMethods());
FlexDecoder.mixin(FlexDecoder.prototype);

FlexEncoder.mixin = mixinFactory(getEncoderMethods());
FlexEncoder.mixin(FlexEncoder.prototype);

function getDecoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    offset: 0
  };

  function write(chunk) {
    var prev = this.offset ? Bufferish.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = prev ? (chunk ? this.bufferish.concat([prev, chunk]) : prev) : chunk;
    this.offset = 0;
  }

  function flush() {
    while (this.offset < this.buffer.length) {
      var start = this.offset;
      var value;
      try {
        value = this.fetch();
      } catch (e) {
        if (e && e.message != BUFFER_SHORTAGE) throw e;
        // rollback
        this.offset = start;
        break;
      }
      this.push(value);
    }
  }

  function reserve(length) {
    var start = this.offset;
    var end = start + length;
    if (end > this.buffer.length) throw new Error(BUFFER_SHORTAGE);
    this.offset = end;
    return start;
  }
}

function getEncoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    send: send,
    maxBufferSize: MAX_BUFFER_SIZE,
    minBufferSize: MIN_BUFFER_SIZE,
    offset: 0,
    start: 0
  };

  function fetch() {
    var start = this.start;
    if (start < this.offset) {
      var end = this.start = this.offset;
      return Bufferish.prototype.slice.call(this.buffer, start, end);
    }
  }

  function flush() {
    while (this.start < this.offset) {
      var value = this.fetch();
      if (value) this.push(value);
    }
  }

  function pull() {
    var buffers = this.buffers || (this.buffers = []);
    var chunk = buffers.length > 1 ? this.bufferish.concat(buffers) : buffers[0];
    buffers.length = 0; // buffer exhausted
    return chunk;
  }

  function reserve(length) {
    var req = length | 0;

    if (this.buffer) {
      var size = this.buffer.length;
      var start = this.offset | 0;
      var end = start + req;

      // is it long enough?
      if (end < size) {
        this.offset = end;
        return start;
      }

      // flush current buffer
      this.flush();

      // resize it to 2x current length
      length = Math.max(length, Math.min(size * 2, this.maxBufferSize));
    }

    // minimum buffer size
    length = Math.max(length, this.minBufferSize);

    // allocate new buffer
    this.buffer = this.bufferish.alloc(length);
    this.start = 0;
    this.offset = req;
    return 0;
  }

  function send(buffer) {
    var length = buffer.length;
    if (length > this.minBufferSize) {
      this.flush();
      this.push(buffer);
    } else {
      var offset = this.reserve(length);
      Bufferish.prototype.copy.call(buffer, this.buffer, offset);
    }
  }
}

// common methods

function write() {
  throw new Error("method not implemented: write()");
}

function fetch() {
  throw new Error("method not implemented: fetch()");
}

function read() {
  var length = this.buffers && this.buffers.length;

  // fetch the first result
  if (!length) return this.fetch();

  // flush current buffer
  this.flush();

  // read from the results
  return this.pull();
}

function push(chunk) {
  var buffers = this.buffers || (this.buffers = []);
  buffers.push(chunk);
}

function pull() {
  var buffers = this.buffers || (this.buffers = []);
  return buffers.shift();
}

function mixinFactory(source) {
  return mixin;

  function mixin(target) {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-core.js":
/*!****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-core.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-core.js

var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);
var ExtUnpacker = __webpack_require__(/*! ./ext-unpacker */ "./node_modules/msgpack-lite/lib/ext-unpacker.js");
var readUint8 = (__webpack_require__(/*! ./read-format */ "./node_modules/msgpack-lite/lib/read-format.js").readUint8);
var ReadToken = __webpack_require__(/*! ./read-token */ "./node_modules/msgpack-lite/lib/read-token.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtUnpacker: addExtUnpacker,
  getExtUnpacker: getExtUnpacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getDecoder(options) {
  var readToken = ReadToken.getReadToken(options);
  return decode;

  function decode(decoder) {
    var type = readUint8(decoder);
    var func = readToken[type];
    if (!func) throw new Error("Invalid type: " + (type ? ("0x" + type.toString(16)) : type));
    return func(decoder);
  }
}

function init() {
  var options = this.options;
  this.decode = getDecoder(options);

  if (options && options.preset) {
    ExtUnpacker.setExtUnpackers(this);
  }

  return this;
}

function addExtUnpacker(etype, unpacker) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  unpackers[etype] = CodecBase.filter(unpacker);
}

function getExtUnpacker(type) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  return unpackers[type] || extUnpacker;

  function extUnpacker(buffer) {
    return new ExtBuffer(buffer, type);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-format.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-format.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-format.js

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

exports.getReadFormat = getReadFormat;
exports.readUint8 = uint8;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");

var HAS_MAP = ("undefined" !== typeof Map);
var NO_ASSERT = true;

function getReadFormat(options) {
  var binarraybuffer = Bufferish.hasArrayBuffer && options && options.binarraybuffer;
  var int64 = options && options.int64;
  var usemap = HAS_MAP && options && options.usemap;

  var readFormat = {
    map: (usemap ? map_to_map : map_to_obj),
    array: array,
    str: str,
    bin: (binarraybuffer ? bin_arraybuffer : bin_buffer),
    ext: ext,
    uint8: uint8,
    uint16: uint16,
    uint32: uint32,
    uint64: read(8, int64 ? readUInt64BE_int64 : readUInt64BE),
    int8: int8,
    int16: int16,
    int32: int32,
    int64: read(8, int64 ? readInt64BE_int64 : readInt64BE),
    float32: read(4, readFloatBE),
    float64: read(8, readDoubleBE)
  };

  return readFormat;
}

function map_to_obj(decoder, len) {
  var value = {};
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value[k[i]] = v[i];
  }
  return value;
}

function map_to_map(decoder, len) {
  var value = new Map();
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value.set(k[i], v[i]);
  }
  return value;
}

function array(decoder, len) {
  var value = new Array(len);
  var decode = decoder.codec.decode;
  for (var i = 0; i < len; i++) {
    value[i] = decode(decoder);
  }
  return value;
}

function str(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  return BufferProto.toString.call(decoder.buffer, "utf-8", start, end);
}

function bin_buffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.from(buf);
}

function bin_arraybuffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.Uint8Array.from(buf).buffer;
}

function ext(decoder, len) {
  var start = decoder.reserve(len+1);
  var type = decoder.buffer[start++];
  var end = start + len;
  var unpack = decoder.codec.getExtUnpacker(type);
  if (!unpack) throw new Error("Invalid ext type: " + (type ? ("0x" + type.toString(16)) : type));
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return unpack(buf);
}

function uint8(decoder) {
  var start = decoder.reserve(1);
  return decoder.buffer[start];
}

function int8(decoder) {
  var start = decoder.reserve(1);
  var value = decoder.buffer[start];
  return (value & 0x80) ? value - 0x100 : value;
}

function uint16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  return (buffer[start++] << 8) | buffer[start];
}

function int16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  var value = (buffer[start++] << 8) | buffer[start];
  return (value & 0x8000) ? value - 0x10000 : value;
}

function uint32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] * 16777216) + (buffer[start++] << 16) + (buffer[start++] << 8) + buffer[start];
}

function int32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] << 24) | (buffer[start++] << 16) | (buffer[start++] << 8) | buffer[start];
}

function read(len, method) {
  return function(decoder) {
    var start = decoder.reserve(len);
    return method.call(decoder.buffer, start, NO_ASSERT);
  };
}

function readUInt64BE(start) {
  return new Uint64BE(this, start).toNumber();
}

function readInt64BE(start) {
  return new Int64BE(this, start).toNumber();
}

function readUInt64BE_int64(start) {
  return new Uint64BE(this, start);
}

function readInt64BE_int64(start) {
  return new Int64BE(this, start);
}

function readFloatBE(start) {
  return ieee754.read(this, start, false, 23, 4);
}

function readDoubleBE(start) {
  return ieee754.read(this, start, false, 52, 8);
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-token.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-token.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-token.js

var ReadFormat = __webpack_require__(/*! ./read-format */ "./node_modules/msgpack-lite/lib/read-format.js");

exports.getReadToken = getReadToken;

function getReadToken(options) {
  var format = ReadFormat.getReadFormat(options);

  if (options && options.useraw) {
    return init_useraw(format);
  } else {
    return init_token(format);
  }
}

function init_token(format) {
  var i;
  var token = new Array(256);

  // positive fixint -- 0x00 - 0x7f
  for (i = 0x00; i <= 0x7f; i++) {
    token[i] = constant(i);
  }

  // fixmap -- 0x80 - 0x8f
  for (i = 0x80; i <= 0x8f; i++) {
    token[i] = fix(i - 0x80, format.map);
  }

  // fixarray -- 0x90 - 0x9f
  for (i = 0x90; i <= 0x9f; i++) {
    token[i] = fix(i - 0x90, format.array);
  }

  // fixstr -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.str);
  }

  // nil -- 0xc0
  token[0xc0] = constant(null);

  // (never used) -- 0xc1
  token[0xc1] = null;

  // false -- 0xc2
  // true -- 0xc3
  token[0xc2] = constant(false);
  token[0xc3] = constant(true);

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = flex(format.uint8, format.bin);
  token[0xc5] = flex(format.uint16, format.bin);
  token[0xc6] = flex(format.uint32, format.bin);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = flex(format.uint8, format.ext);
  token[0xc8] = flex(format.uint16, format.ext);
  token[0xc9] = flex(format.uint32, format.ext);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = format.float32;
  token[0xcb] = format.float64;

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = format.uint8;
  token[0xcd] = format.uint16;
  token[0xce] = format.uint32;
  token[0xcf] = format.uint64;

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = format.int8;
  token[0xd1] = format.int16;
  token[0xd2] = format.int32;
  token[0xd3] = format.int64;

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  token[0xd4] = fix(1, format.ext);
  token[0xd5] = fix(2, format.ext);
  token[0xd6] = fix(4, format.ext);
  token[0xd7] = fix(8, format.ext);
  token[0xd8] = fix(16, format.ext);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = flex(format.uint8, format.str);
  token[0xda] = flex(format.uint16, format.str);
  token[0xdb] = flex(format.uint32, format.str);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = flex(format.uint16, format.array);
  token[0xdd] = flex(format.uint32, format.array);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = flex(format.uint16, format.map);
  token[0xdf] = flex(format.uint32, format.map);

  // negative fixint -- 0xe0 - 0xff
  for (i = 0xe0; i <= 0xff; i++) {
    token[i] = constant(i - 0x100);
  }

  return token;
}

function init_useraw(format) {
  var i;
  var token = init_token(format).slice();

  // raw 8 -- 0xd9
  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  token[0xd9] = token[0xc4];
  token[0xda] = token[0xc5];
  token[0xdb] = token[0xc6];

  // fixraw -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.bin);
  }

  return token;
}

function constant(value) {
  return function() {
    return value;
  };
}

function flex(lenFunc, decodeFunc) {
  return function(decoder) {
    var len = lenFunc(decoder);
    return decodeFunc(decoder, len);
  };
}

function fix(len, method) {
  return function(decoder) {
    return method(decoder, len);
  };
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-core.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-core.js

var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);
var ExtPacker = __webpack_require__(/*! ./ext-packer */ "./node_modules/msgpack-lite/lib/ext-packer.js");
var WriteType = __webpack_require__(/*! ./write-type */ "./node_modules/msgpack-lite/lib/write-type.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtPacker: addExtPacker,
  getExtPacker: getExtPacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getEncoder(options) {
  var writeType = WriteType.getWriteType(options);
  return encode;

  function encode(encoder, value) {
    var func = writeType[typeof value];
    if (!func) throw new Error("Unsupported type \"" + (typeof value) + "\": " + value);
    func(encoder, value);
  }
}

function init() {
  var options = this.options;
  this.encode = getEncoder(options);

  if (options && options.preset) {
    ExtPacker.setExtPackers(this);
  }

  return this;
}

function addExtPacker(etype, Class, packer) {
  packer = CodecBase.filter(packer);
  var name = Class.name;
  if (name && name !== "Object") {
    var packers = this.extPackers || (this.extPackers = {});
    packers[name] = extPacker;
  } else {
    // fallback for IE
    var list = this.extEncoderList || (this.extEncoderList = []);
    list.unshift([Class, extPacker]);
  }

  function extPacker(value) {
    if (packer) value = packer(value);
    return new ExtBuffer(value, etype);
  }
}

function getExtPacker(value) {
  var packers = this.extPackers || (this.extPackers = {});
  var c = value.constructor;
  var e = c && c.name && packers[c.name];
  if (e) return e;

  // fallback for IE
  var list = this.extEncoderList || (this.extEncoderList = []);
  var len = list.length;
  for (var i = 0; i < len; i++) {
    var pair = list[i];
    if (c === pair[0]) return pair[1];
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-token.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-token.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-token.js

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var uint8 = (__webpack_require__(/*! ./write-uint8 */ "./node_modules/msgpack-lite/lib/write-uint8.js").uint8);
var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var IS_BUFFER_SHIM = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var NO_TYPED_ARRAY = IS_BUFFER_SHIM && !Buffer.TYPED_ARRAY_SUPPORT;
var Buffer_prototype = Bufferish.hasBuffer && Buffer.prototype || {};

exports.getWriteToken = getWriteToken;

function getWriteToken(options) {
  if (options && options.uint8array) {
    return init_uint8array();
  } else if (NO_TYPED_ARRAY || (Bufferish.hasBuffer && options && options.safe)) {
    return init_safe();
  } else {
    return init_token();
  }
}

function init_uint8array() {
  var token = init_token();

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, writeDoubleBE);

  return token;
}

// Node.js and browsers with TypedArray

function init_token() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = write1(0xc4);
  token[0xc5] = write2(0xc5);
  token[0xc6] = write4(0xc6);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = write1(0xc7);
  token[0xc8] = write2(0xc8);
  token[0xc9] = write4(0xc9);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, (Buffer_prototype.writeFloatBE || writeFloatBE), true);
  token[0xcb] = writeN(0xcb, 8, (Buffer_prototype.writeDoubleBE || writeDoubleBE), true);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = write1(0xcc);
  token[0xcd] = write2(0xcd);
  token[0xce] = write4(0xce);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = write1(0xd0);
  token[0xd1] = write2(0xd1);
  token[0xd2] = write4(0xd2);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = write1(0xd9);
  token[0xda] = write2(0xda);
  token[0xdb] = write4(0xdb);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = write2(0xdc);
  token[0xdd] = write4(0xdd);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = write2(0xde);
  token[0xdf] = write4(0xdf);

  return token;
}

// safe mode: for old browsers and who needs asserts

function init_safe() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = writeN(0xc4, 1, Buffer.prototype.writeUInt8);
  token[0xc5] = writeN(0xc5, 2, Buffer.prototype.writeUInt16BE);
  token[0xc6] = writeN(0xc6, 4, Buffer.prototype.writeUInt32BE);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = writeN(0xc7, 1, Buffer.prototype.writeUInt8);
  token[0xc8] = writeN(0xc8, 2, Buffer.prototype.writeUInt16BE);
  token[0xc9] = writeN(0xc9, 4, Buffer.prototype.writeUInt32BE);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, Buffer.prototype.writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, Buffer.prototype.writeDoubleBE);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = writeN(0xcc, 1, Buffer.prototype.writeUInt8);
  token[0xcd] = writeN(0xcd, 2, Buffer.prototype.writeUInt16BE);
  token[0xce] = writeN(0xce, 4, Buffer.prototype.writeUInt32BE);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = writeN(0xd0, 1, Buffer.prototype.writeInt8);
  token[0xd1] = writeN(0xd1, 2, Buffer.prototype.writeInt16BE);
  token[0xd2] = writeN(0xd2, 4, Buffer.prototype.writeInt32BE);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = writeN(0xd9, 1, Buffer.prototype.writeUInt8);
  token[0xda] = writeN(0xda, 2, Buffer.prototype.writeUInt16BE);
  token[0xdb] = writeN(0xdb, 4, Buffer.prototype.writeUInt32BE);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = writeN(0xdc, 2, Buffer.prototype.writeUInt16BE);
  token[0xdd] = writeN(0xdd, 4, Buffer.prototype.writeUInt32BE);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = writeN(0xde, 2, Buffer.prototype.writeUInt16BE);
  token[0xdf] = writeN(0xdf, 4, Buffer.prototype.writeUInt32BE);

  return token;
}

function write1(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(2);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset] = value;
  };
}

function write2(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(3);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function write4(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(5);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 24;
    buffer[offset++] = value >>> 16;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function writeN(type, len, method, noAssert) {
  return function(encoder, value) {
    var offset = encoder.reserve(len + 1);
    encoder.buffer[offset++] = type;
    method.call(encoder.buffer, value, offset, noAssert);
  };
}

function writeUInt64BE(value, offset) {
  new Uint64BE(this, offset, value);
}

function writeInt64BE(value, offset) {
  new Int64BE(this, offset, value);
}

function writeFloatBE(value, offset) {
  ieee754.write(this, value, offset, false, 23, 4);
}

function writeDoubleBE(value, offset) {
  ieee754.write(this, value, offset, false, 52, 8);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-type.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-type.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-type.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");
var WriteToken = __webpack_require__(/*! ./write-token */ "./node_modules/msgpack-lite/lib/write-token.js");
var uint8 = (__webpack_require__(/*! ./write-uint8 */ "./node_modules/msgpack-lite/lib/write-uint8.js").uint8);
var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);

var HAS_UINT8ARRAY = ("undefined" !== typeof Uint8Array);
var HAS_MAP = ("undefined" !== typeof Map);

var extmap = [];
extmap[1] = 0xd4;
extmap[2] = 0xd5;
extmap[4] = 0xd6;
extmap[8] = 0xd7;
extmap[16] = 0xd8;

exports.getWriteType = getWriteType;

function getWriteType(options) {
  var token = WriteToken.getWriteToken(options);
  var useraw = options && options.useraw;
  var binarraybuffer = HAS_UINT8ARRAY && options && options.binarraybuffer;
  var isBuffer = binarraybuffer ? Bufferish.isArrayBuffer : Bufferish.isBuffer;
  var bin = binarraybuffer ? bin_arraybuffer : bin_buffer;
  var usemap = HAS_MAP && options && options.usemap;
  var map = usemap ? map_to_map : obj_to_map;

  var writeType = {
    "boolean": bool,
    "function": nil,
    "number": number,
    "object": (useraw ? object_raw : object),
    "string": _string(useraw ? raw_head_size : str_head_size),
    "symbol": nil,
    "undefined": nil
  };

  return writeType;

  // false -- 0xc2
  // true -- 0xc3
  function bool(encoder, value) {
    var type = value ? 0xc3 : 0xc2;
    token[type](encoder, value);
  }

  function number(encoder, value) {
    var ivalue = value | 0;
    var type;
    if (value !== ivalue) {
      // float 64 -- 0xcb
      type = 0xcb;
      token[type](encoder, value);
      return;
    } else if (-0x20 <= ivalue && ivalue <= 0x7F) {
      // positive fixint -- 0x00 - 0x7f
      // negative fixint -- 0xe0 - 0xff
      type = ivalue & 0xFF;
    } else if (0 <= ivalue) {
      // uint 8 -- 0xcc
      // uint 16 -- 0xcd
      // uint 32 -- 0xce
      type = (ivalue <= 0xFF) ? 0xcc : (ivalue <= 0xFFFF) ? 0xcd : 0xce;
    } else {
      // int 8 -- 0xd0
      // int 16 -- 0xd1
      // int 32 -- 0xd2
      type = (-0x80 <= ivalue) ? 0xd0 : (-0x8000 <= ivalue) ? 0xd1 : 0xd2;
    }
    token[type](encoder, ivalue);
  }

  // uint 64 -- 0xcf
  function uint64(encoder, value) {
    var type = 0xcf;
    token[type](encoder, value.toArray());
  }

  // int 64 -- 0xd3
  function int64(encoder, value) {
    var type = 0xd3;
    token[type](encoder, value.toArray());
  }

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  // fixstr -- 0xa0 - 0xbf
  function str_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFF) ? 2 : (length <= 0xFFFF) ? 3 : 5;
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFFFF) ? 3 : 5;
  }

  function _string(head_size) {
    return string;

    function string(encoder, value) {
      // prepare buffer
      var length = value.length;
      var maxsize = 5 + length * 3;
      encoder.offset = encoder.reserve(maxsize);
      var buffer = encoder.buffer;

      // expected header size
      var expected = head_size(length);

      // expected start point
      var start = encoder.offset + expected;

      // write string
      length = BufferProto.write.call(buffer, value, start);

      // actual header size
      var actual = head_size(length);

      // move content when needed
      if (expected !== actual) {
        var targetStart = start + actual - expected;
        var end = start + length;
        BufferProto.copy.call(buffer, buffer, targetStart, start, end);
      }

      // write header
      var type = (actual === 1) ? (0xa0 + length) : (actual <= 3) ? (0xd7 + actual) : 0xdb;
      token[type](encoder, length);

      // move cursor
      encoder.offset += length;
    }
  }

  function object(encoder, value) {
    // null
    if (value === null) return nil(encoder, value);

    // Buffer
    if (isBuffer(value)) return bin(encoder, value);

    // Array
    if (IS_ARRAY(value)) return array(encoder, value);

    // int64-buffer objects
    if (Uint64BE.isUint64BE(value)) return uint64(encoder, value);
    if (Int64BE.isInt64BE(value)) return int64(encoder, value);

    // ext formats
    var packer = encoder.codec.getExtPacker(value);
    if (packer) value = packer(value);
    if (value instanceof ExtBuffer) return ext(encoder, value);

    // plain old Objects or Map
    map(encoder, value);
  }

  function object_raw(encoder, value) {
    // Buffer
    if (isBuffer(value)) return raw(encoder, value);

    // others
    object(encoder, value);
  }

  // nil -- 0xc0
  function nil(encoder, value) {
    var type = 0xc0;
    token[type](encoder, value);
  }

  // fixarray -- 0x90 - 0x9f
  // array 16 -- 0xdc
  // array 32 -- 0xdd
  function array(encoder, value) {
    var length = value.length;
    var type = (length < 16) ? (0x90 + length) : (length <= 0xFFFF) ? 0xdc : 0xdd;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    for (var i = 0; i < length; i++) {
      encode(encoder, value[i]);
    }
  }

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  function bin_buffer(encoder, value) {
    var length = value.length;
    var type = (length < 0xFF) ? 0xc4 : (length <= 0xFFFF) ? 0xc5 : 0xc6;
    token[type](encoder, length);
    encoder.send(value);
  }

  function bin_arraybuffer(encoder, value) {
    bin_buffer(encoder, new Uint8Array(value));
  }

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  function ext(encoder, value) {
    var buffer = value.buffer;
    var length = buffer.length;
    var type = extmap[length] || ((length < 0xFF) ? 0xc7 : (length <= 0xFFFF) ? 0xc8 : 0xc9);
    token[type](encoder, length);
    uint8[value.type](encoder);
    encoder.send(buffer);
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function obj_to_map(encoder, value) {
    var keys = Object.keys(value);
    var length = keys.length;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    keys.forEach(function(key) {
      encode(encoder, key);
      encode(encoder, value[key]);
    });
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function map_to_map(encoder, value) {
    if (!(value instanceof Map)) return obj_to_map(encoder, value);

    var length = value.size;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    value.forEach(function(val, key, m) {
      encode(encoder, key);
      encode(encoder, val);
    });
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw(encoder, value) {
    var length = value.length;
    var type = (length < 32) ? (0xa0 + length) : (length <= 0xFFFF) ? 0xda : 0xdb;
    token[type](encoder, length);
    encoder.send(value);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-uint8.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-uint8.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// write-unit8.js

var constant = exports.uint8 = new Array(256);

for (var i = 0x00; i <= 0xFF; i++) {
  constant[i] = write0(i);
}

function write0(type) {
  return function(encoder) {
    var offset = encoder.reserve(1);
    encoder.buffer[offset] = type;
  };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./Game/main.js");
/******/ 	
/******/ })()
;
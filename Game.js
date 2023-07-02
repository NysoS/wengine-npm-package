"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __importDefault(require("./Engine/Math/Vector2D"));
class Game {
    constructor(name, width, height, fullScreen = false) {
        this.canvas = null;
        this.ctx = null;
        this.name = "Default name";
        this.width = 800;
        this.height = 600;
        this.imageInit = new Image(10, 10);
        if (!fullScreen) {
            this.width = width;
            this.height = height;
        }
        else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
        this.initCanvas();
    }
    initCanvas() {
        var _a, _b;
        if (!document.querySelector('#game')) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "game");
            (_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
        }
        this.canvas = document.getElementById("game");
        this.ctx = (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.draw();
    }
    static getGameSize() {
        return this.gameSize;
    }
    setImage(url) {
        this.imageInit.src = url;
    }
    init() {
    }
    start() {
    }
    update() {
    }
    draw() {
        var _a;
        this.clear();
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(this.imageInit, 50, 50, this.imageInit.width / 2, this.imageInit.width / 2);
    }
    clear() {
        var _a;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.width, this.height);
    }
    stop() {
    }
}
Game.gameSize = new Vector2D_1.default();
exports.default = Game;

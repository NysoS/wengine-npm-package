/**
 * @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
 * @copyright Kristofer Ledoux 2023
 * Github: https://github.com/NysoS/NysoS
 */ 

import InputHandler from "./Engine/Inputs/InputHandler";
import Vector2D from "./Engine/Math/Vector2D";

export default class Game
{
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private static gameSize: Vector2D = new Vector2D();

    private name: string = "Default name";
    private width: number = 800;
    private height: number = 600;

    private isGameStarted: boolean = false;
    private gameId: number = 0;

    private inputHandler: InputHandler | null = null;

    constructor(name: string|null, width: number = 800, height: number = 600, fullScreen: boolean = false)
    {
        if (name) {
            this.name = name;
        }
        if (!fullScreen) {
            this.width = width;
            this.height = height;   
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }

        this.initCanvas();
        
        this.inputHandler = new InputHandler(this);
    }

    initCanvas() {
        if (!document.querySelector('#game')) {
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "game");
            document.getElementById("app")?.appendChild(canvas);
        }

        this.canvas = <HTMLCanvasElement>document.getElementById("game");
        this.ctx = <CanvasRenderingContext2D>this.canvas?.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    static getGameSize(): Vector2D
    {
        return this.gameSize;
    }

    init() {
        console.log("Init Game...");

        this.inputHandler?.initInput();

        this.start();
    }

    start() {
        this.isGameStarted = true;
        this.update();
    }

    update() {
        this.gameId = window.requestAnimationFrame(() => {
            if (!this.isGameStarted) { 
                window.cancelAnimationFrame(this.gameId);
            }

            this.inputHandler?.updateInputs();

            this.update();
        });
    }

    draw() {
        this.clear();
    }

    clear() {
        this.ctx?.clearRect(0, 0, this.width, this.height);
    }

    stop() {
        this.isGameStarted = false;
        console.log("Stop Game...");
    }
}
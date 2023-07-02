import Vector2D from "./Engine/Math/Vector2D";

export default class Game
{
    private canvas: HTMLElement | null = null;
    private ctx: HTMLCanvasElement | null = null;
    private static gameSize: Vector2D = new Vector2D();

    private name: String = "Default name";
    private width: Number = 800;
    private height: Number = 600;

    constructor(name: String, width: Number, height: Number, fullScreen: boolean = false)
    {
        if (!fullScreen) {
            this.width = width;
            this.height = height;   
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
    }

    static getGameSize(): Vector2D
    {
        return this.gameSize;
    }

    init() {
        
    }

    start() {
        
    }

    update() {
        
    }

    draw() {
        
    }

    stop() {
        
    }
}
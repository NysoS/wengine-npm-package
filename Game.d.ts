import Vector2D from "./Engine/Math/Vector2D";
export default class Game {
    private canvas;
    private ctx;
    private static gameSize;
    private name;
    private width;
    private height;
    imageInit: HTMLImageElement;
    constructor(name: string, width: number, height: number, fullScreen?: boolean);
    initCanvas(): void;
    static getGameSize(): Vector2D;
    setImage(url: string): void;
    init(): void;
    start(): void;
    update(): void;
    draw(): void;
    clear(): void;
    stop(): void;
}

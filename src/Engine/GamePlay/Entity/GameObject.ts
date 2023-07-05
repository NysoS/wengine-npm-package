import EntityInterface from "../../Entity/EntityInterface";

export default class GameObject implements EntityInterface
{
    private name: String = "GameObject";

    constructor(name: String) {
        this.name = name;
    }

    img = new Image(30, 30);
    
    getName(): String {
        return this.name;
    }

    init(): void {
        this.img.onload = () => {
            this.img.src = "./public/image/blob.svg";    
        }
    }

    start(): void {
       
    }

    update(): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.img, 150, 150);
    }

    destroy(): void {
        
    }

    addComponent<T>(): T {
        throw new Error("Method not implemented.");
    }

    getComponent<T>(): T {
        throw new Error("Method not implemented.");
    }
}
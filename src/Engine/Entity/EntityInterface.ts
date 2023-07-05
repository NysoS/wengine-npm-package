/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

export default interface EntityInterface
{
    getName(): String;
    
    init(): void;

    start(): void;

    update(): void;

    draw(ctx: CanvasRenderingContext2D): void;

    destroy(): void;

    addComponent<T>(): T;

    getComponent<T>(): T;
}
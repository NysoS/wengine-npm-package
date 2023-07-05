export default interface EntityInterface
{
    getName(): String;
    
    init(): void;

    start(): void;

    update(): void;

    destroy(): void;

    addComponent<T>(): T;

    getComponent<T>(): T;
}
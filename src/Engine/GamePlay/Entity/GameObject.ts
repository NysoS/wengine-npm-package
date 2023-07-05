/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import EntityInterface from "../../Entity/EntityInterface";

export default class GameObject implements EntityInterface
{
    private name: String = "GameObject";

    constructor(name: String) {
        this.name = name;
    }
    
    getName(): String {
        return this.name;
    }

    init(): void {

    }

    start(): void {
       
    }

    update(): void {
        
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
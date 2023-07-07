/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Entity from "../Entity/Entity";
import ComponentInterface from "./ComponentInterface";

export default abstract class Component implements ComponentInterface
{
    constructor(private entity: Entity, private name: string = "Component") {
    }

    getName(): string {
        return this.name;
    }

    getEntity(): Entity | null {
        return this.entity;
    }

    initComponent(): void {
        
    }

    destroyComponent(): void {
        throw new Error("Method not implemented.");
    }
}
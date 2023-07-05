/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Entity from "../Entity/Entity";
import ComponentInterface from "./ComponentInterface";

export default abstract class Component implements ComponentInterface
{
    private name: string = "Component";

    constructor(private entity: Entity, name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    getEntity(): Entity | null {
        return this.entity;
    }

    initComponent(): void {
        throw new Error("Method not implemented.");
    }

    destroyComponent(): void {
        throw new Error("Method not implemented.");
    }
}
/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Entity from "./Entity";

export default class GameObject extends Entity
{
    constructor(name: String = 'GameObject') {
        super(name);
    }

    init(): void {
        super.init();
    }

    start(): void {
        super.start();
    }

    update(): void {
        super.update();
    }

    destroy(): void {
        super.destroy();
    }
}
/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import EntityInterface from "./EntityInterface";

export default class EntityManager
{
    private entities: Array<EntityInterface> = new Array();
    
    constructor(){
    }

    addEntity(entity: EntityInterface) {
        this.entities.push(entity);
    }

    removeEntity(entity: EntityInterface) {
        this.entities.slice(this.entities.indexOf(entity), 1);
    }

    initEntities(): void{
        for (let entity of this.entities) {
            entity.init();
        }
    }

    startEntities(): void{
        for (let entity of this.entities) {
            entity.start();
        }
    }
    //TODO: remove ctx
    updateEntities(ctx: CanvasRenderingContext2D): void{
        for (let entity of this.entities) {
            entity.update();
            entity.draw(ctx);
        }
    }

    destroyEntities(): void{
        for (let entity of this.entities) {
            entity.destroy();
        }
    }

}
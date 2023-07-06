/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Game from "../../Game";
import EntityInterface from "./EntityInterface";

export default class EntityManager
{
    private entities: Array<EntityInterface> = new Array();
    
    constructor(private game:Game){
    }

    addEntity(entity: EntityInterface) {
        entity.setGameContext(this.game);
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

    updateEntities(): void{
        for (let entity of this.entities) {
            entity.update();
        }
    }

    destroyEntities(): void{
        for (let entity of this.entities) {
            entity.destroy();
        }
    }

}
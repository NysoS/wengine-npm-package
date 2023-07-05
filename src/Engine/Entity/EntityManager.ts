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
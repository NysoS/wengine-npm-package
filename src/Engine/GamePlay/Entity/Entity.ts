/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import EntityInterface from "../../Entity/EntityInterface";
import RendererManager from "../../Renderer/RendererManager";
import Component from "../Component/Component";

export default abstract class Entity implements EntityInterface {

    private name: String = "entity";
    protected tickableEntity = false;
    private components: Array<Component> = new Array();

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

    addComponent<T extends Component>(comp: { new(entity: Entity, name: string | null): T }, name: string | null): T {
        let newComp = new comp(this, name);
        RendererManager.getInstance().addRendererEntity(newComp);
        return newComp;
    }

    getComponent<T extends Component>(comp: T): T {
        return <T>this.components.find(component => component === comp);
    }
}

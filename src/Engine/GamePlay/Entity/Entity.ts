/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Game from "../../../Game";
import EntityInterface from "../../Entity/EntityInterface";
import Component from "../Component/Component";

export default abstract class Entity implements EntityInterface {

    private name: String = "entity";
    protected tickableEntity = false;
    private components: Array<Component> = new Array();
    public game: Game | null = null;

    constructor(name: String) {
        this.name = name;
    }

    setGameContext(game: Game): void {
        this.game = game;
    }

    getName(): String {
        return this.name;
    }

    init(): void {
        for (let comp of this.components) {
            comp.initComponent();
        }
    }

    start(): void {

    }

    update(): void {

    }

    destroy(): void {

    }

    addComponent<T extends Component>(comp: { new(entity: Entity): T }): T {
        let newComp = new comp(this);
        this.components.push(newComp);
        return newComp;
    }

    getComponent<T extends Component>(comp: T): T {
        return <T>this.components.find(component => component === comp);
    }
}

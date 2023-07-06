/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Game from "../../Game";
import Component from "../GamePlay/Component/Component";

export default interface EntityInterface
{
    getName(): String;
    
    init(): void;

    start(): void;

    update(): void;

    destroy(): void;

    addComponent<T extends Component>(comp: {new() : T }, name:string|null): T;

    getComponent<T extends Component>(comp: T): T;

    setGameContext(game: Game): void;
}
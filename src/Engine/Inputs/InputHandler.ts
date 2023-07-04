/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Game from "../../Game";
import InputMap from "./InputMap";

export default class InputHandler
{
    private gameCtx: Game | null = null;
    private inputsQueue: Array<string> = new Array();
    private inputsMap: Array<InputMap> = new Array();

    constructor(gameContext: Game) {
        this.gameCtx = gameContext;
    }

    initInput() {       
        window.addEventListener('keydown', event => {
            if (this.inputsMap.find(input => input.getKey() === event.key)
                && this.inputsQueue.indexOf(event.key) === -1
            ) {
                this.inputsQueue.push(event.key);
            }
        });

        window.addEventListener('keyup', event => {
            if (this.inputsQueue.indexOf(event.key) > -1) {
                this.inputsQueue.splice(this.inputsQueue.indexOf(event.key), 1);
            }
        });
    }

    bindAction(inputMap: InputMap) {
        this.inputsMap.push(inputMap);
    }

    updateInputs() {
        for (let indexkey in this.inputsQueue) {
            if (this.inputsQueue[indexkey]) {
                let inputMap = this.inputsMap.find(input => input.getKey() === this.inputsQueue[indexkey]);
                if (inputMap) {
                    inputMap.invoke();
                }   
            }
        }
    }
}
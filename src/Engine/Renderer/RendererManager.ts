/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Game from "../../Game";
import SpriteRenderer from "../GamePlay/Component/SpriteRenderer";

export default class RendererManager
{
    private static instance: RendererManager|null = null;
    private sprites: Array<SpriteRenderer> = new Array();

    constructor(private game:Game) {        
    }

    addRendererEntity(sprite: SpriteRenderer) {
        this.sprites.push(sprite);
    }

    removeRendererEntity(sprite: SpriteRenderer) {
        this.sprites.splice(this.sprites.indexOf(sprite), 1);
    }

    renderer(ctx: CanvasRenderingContext2D) {
        for (let sprite of this.sprites) {
            sprite.renderer(ctx);
        }
    }
}
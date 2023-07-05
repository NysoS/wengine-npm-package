/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import Component from "../GamePlay/Component/Component";
import SpriteRenderer from "../GamePlay/Component/SpriteRenderer";

export default class RendererManager
{
    private static instance: RendererManager|null = null;
    private sprites: Array<SpriteRenderer> = new Array();

    constructor() {        
    }

    static getInstance(): RendererManager
    {
        if (!RendererManager.instance) {
            RendererManager.instance = new RendererManager();
        }
        
        return RendererManager.instance;
    }

    addRendererEntity(sprite: Component) {
        if (sprite instanceof SpriteRenderer) {
            this.sprites.push(<SpriteRenderer>sprite);
        }
    }

    removeRendererEntity(sprite: Component) {
        if (sprite instanceof SpriteRenderer) {
            this.sprites.splice(this.sprites.indexOf(<SpriteRenderer>sprite), 1);
        }
    }

    renderer(ctx: CanvasRenderingContext2D) {
        for (let sprite of this.sprites) {
            sprite.renderer(ctx);
        }
    }
}
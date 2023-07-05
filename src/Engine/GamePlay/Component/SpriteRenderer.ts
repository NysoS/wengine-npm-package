/**
* @author Kristofer Ledoux (NysoS) <k.ledoux.dev@gmail.com>
* @copyright Kristofer Ledoux 2023
* Github: https://github.com/NysoS/NysoS
*/

import SpriteRendererInterface from "../../Renderer/SpriteRendererInterface";
import Entity from "../Entity/Entity";
import Component from "./Component";

export default class SpriteRenderer extends Component implements SpriteRendererInterface
{
    private sprite: HTMLImageElement = new Image();

    constructor(entity: Entity, name:string = "SpriteRenderer") {
        super(entity, name);
    }

    setDrawable(sprite: HTMLImageElement) {
        this.sprite = sprite;
    }

    renderer(ctx: CanvasRenderingContext2D): void {
        this.sprite.onload = () => {
            ctx.drawImage(this.sprite, 50, 50);   
        }
    }
}
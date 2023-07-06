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

    constructor(entity: Entity, name:string|null = "SpriteRenderer") {
        super(entity, name = "");
    }

    setDrawable(sprite: HTMLImageElement) {
        this.sprite = sprite;
    }

    initComponent(): void{
        super.initComponent();
        console.log(this.getEntity()?.game);
        
        this.sprite.onload = () => {
            this.getEntity()?.game?.rendererManager.addRendererEntity(this);
        }
    }

    renderer(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, 50, 50, 50, 50);   
    }
}
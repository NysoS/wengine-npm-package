export default interface SpriteRendererInterface
{
    setDrawable(sprite: HTMLImageElement): void;

    renderer(ctx: CanvasRenderingContext2D): void
}
import Entity from "../Entity/Entity";

export default interface ComponentInterface
{
    getName(): string;

    getEntity(): Entity | null

    initComponent(): void;

    destroyComponent(): void;
}
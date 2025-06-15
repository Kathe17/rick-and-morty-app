import type { Character } from "../../../../models/character.model";

export interface CharacterInfoProps {
    char?: Character;
    isFavorite: boolean;
}

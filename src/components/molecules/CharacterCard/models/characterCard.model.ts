import type { Character } from "../../../../models/character.model";

export interface CharacterCardProps {
    char: Character
    selectedId?: string | null;
    setSelectedId: (id: string) => void;
    favorites: string[];
    toggleFavorite: (id: string) => void;
    onSoftDelete?: (id: string) => void;
    onRestore?: (id: string) => void;
    isDeleted?: boolean;
}

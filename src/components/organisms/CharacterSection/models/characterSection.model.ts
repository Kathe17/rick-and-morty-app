import type { Character } from "../../../../models/character.model";

export interface CharacterSectionProps {
    title: string;
    characters: Character[];
    selectedId?: string | null;
    setSelectedId: (id: string) => void;
    favorites: string[];
    toggleFavorite: (id: string) => void;
    softDelete?: (id: string) => void;
    isDeleted?: boolean;
    restore?: (id: string) => void;
}

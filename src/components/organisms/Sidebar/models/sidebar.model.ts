import type { Character } from "../../../../models/character.model";

export interface SidebarProps {
    name: string;
    setName: (val: string) => void;
    filterOpen: boolean;
    toggleFilterOpen: () => void;
    filterRef?: React.RefObject<HTMLDivElement | null>;
    characterFilter: string;
    setCharacterFilter: (val: string) => void;
    specieFilter: string;
    setSpecieFilter: (val: string) => void;
    statusFilter: string;
    setStatusFilter: (val: string) => void;
    genderFilter: string;
    setGenderFilter: (val: string) => void;
    characterQuery: string;
    specieQuery: string;
    handleFilterClick: () => void;
    favoriteCharacters: Character[];
    nonFavoriteCharacters: Character[];
    deletedCharacters: Character[];
    favorites: string[];
    selectedId?: string | null;
    setSelectedId: (id: string) => void;
    toggleFavorite: (id: string) => void;
    error?: { message: string };
    loading?: boolean;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    softDelete?: (id: string) => void;
    restore?: (id: string) => void;
    sortOrder: string;
    setSortOrder: (value: string) => void;
    statusQuery: string;
    genderQuery: string;
}

export interface FiltersProps {
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
    sortOrder: string;
    setSortOrder: (value: string) => void;
    statusQuery: string;
    genderQuery: string;
}

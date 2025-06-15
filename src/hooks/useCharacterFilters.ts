import { useState } from "react";

export function useCharacterFilters() {
    const [characterFilter, setCharacterFilter] = useState("all");
    const [specieFilter, setSpecieFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [genderFilter, setGenderFilter] = useState("all");
    const [characterQuery, setCharacterQuery] = useState("all");
    const [specieQuery, setSpecieQuery] = useState("all");
    const [statusQuery, setStatusQuery] = useState("all");
    const [genderQuery, setGenderQuery] = useState("all");
    const [sortOrder, setSortOrder] = useState<string>('asc');

    const applyFilters = () => {
        setCharacterQuery(characterFilter);
        setSpecieQuery(specieFilter);
        setStatusQuery(statusFilter);
        setGenderQuery(genderFilter);
    };

    return {
        characterFilter,
        setCharacterFilter,
        specieFilter,
        setSpecieFilter,
        statusFilter,
        setStatusFilter,
        genderFilter,
        setGenderFilter,
        characterQuery,
        specieQuery,
        statusQuery,
        genderQuery,
        setCharacterQuery,
        setSpecieQuery,
        setStatusQuery,
        setGenderQuery,
        sortOrder,
        setSortOrder,
        applyFilters,
    };
}
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import { sortByName } from '../utils/sort';
import { useSoftDelete } from '../hooks/useSoftDelete';
import { useFavorites } from '../hooks/useFavorites';
import { useSidebar } from '../hooks/useSidebar';
import { useCharacterFilters } from '../hooks/useCharacterFilters';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import CharacterInfo from '../components/organisms/CharacterInfo/CharacterInfo';
import type { Character } from '../models/character.model';

const CharacterList: React.FC = () => {
    // Sidebar & search hooks
    const { filterOpen, filterRef, buttonRef, toggleFilterOpen } = useSidebar();
    const {
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
        applyFilters,
        sortOrder,
        setSortOrder,
    } = useCharacterFilters();
    const { name, setName, selectedId, setSelectedId } = useCharacterSearch();

    // Favoritos y borrados
    const { deleted, softDelete, restore } = useSoftDelete();
    const { favorites, toggleFavorite } = useFavorites<string>();

    // GraphQL
    const { data, loading, error } = useQuery(GET_CHARACTERS, {
        variables: {
            name,
            species: specieQuery !== 'all' ? specieQuery : '',
            status: statusQuery !== 'all' ? statusQuery : '',
            gender: genderQuery !== 'all' ? genderQuery : '',
        },
    });

    // Personajes filtrados
    const allCharacters: Character[] = data?.characters?.results ? data.characters.results : [];
    // Para mostrar todos, incluidos eliminados, para restaurar
    const favoriteCharacters = sortByName(
        allCharacters.filter((char: Character) => favorites.includes(char.id) && !deleted.includes(char.id)),
        sortOrder
    );
    const nonFavoriteCharacters = sortByName(
        allCharacters.filter((char: Character) => !favorites.includes(char.id) && !deleted.includes(char.id)),
        sortOrder
    );
    const deletedCharacters = sortByName(
        allCharacters.filter((char: Character) => deleted.includes(char.id)),
        sortOrder
    );

    // Botón de aplicar filtros
    const handleFilterClick = () => {
        applyFilters();
        toggleFilterOpen();
    };

    const char: Character | undefined = [...favoriteCharacters, ...nonFavoriteCharacters].find(
        (c: Character) => c.id === selectedId
    );

    const isFavorite = favorites.includes(selectedId || '');

    return (
        <div className="fixed flex inset-0 bg-white">
            {/* Sidebar */}
            <Sidebar
                name={name}
                setName={setName}
                filterOpen={filterOpen}
                toggleFilterOpen={toggleFilterOpen}
                filterRef={filterRef}
                characterFilter={characterFilter}
                setCharacterFilter={setCharacterFilter}
                specieFilter={specieFilter}
                setSpecieFilter={setSpecieFilter}
                characterQuery={characterQuery}
                specieQuery={specieQuery}
                handleFilterClick={handleFilterClick}
                favoriteCharacters={favoriteCharacters}
                nonFavoriteCharacters={nonFavoriteCharacters}
                deletedCharacters={deletedCharacters}
                favorites={favorites}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                toggleFavorite={toggleFavorite}
                error={error}
                loading={loading}
                buttonRef={buttonRef}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                softDelete={softDelete}
                restore={restore}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                statusQuery={statusQuery}
                genderQuery={genderQuery}
            />
            {/* Main content */}
            <main className="flex-1 flex flex-col bg-white min-h-screen min-w-0 pt-10 px-24 overflow-auto">
                {!selectedId ? (
                    <div className="text-primary-700 text-xl opacity-60 pl-16 pt-12">
                        Select a character to see details
                    </div>
                ) : (
                    <CharacterInfo char={char} isFavorite={isFavorite} />
                )}
            </main>
        </div>
    );
};

export default CharacterList;
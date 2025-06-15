import React from "react";
import { HiOutlineSearch, HiOutlineAdjustments } from "react-icons/hi";
import Typography from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import Poppup from "../../atoms/Poppup/Poppup";
import BottomSheet from "../../atoms/BottomSheet/BottomSheet";
import Filters from "../Filters/Filters";
import CharacterSection from "../CharacterSection/CharacterSection";
import type { SidebarProps } from "./models/sidebar.model";

const Sidebar: React.FC<SidebarProps> = ({
    name,
    setName,
    filterOpen,
    toggleFilterOpen,
    filterRef,
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
    handleFilterClick,
    favoriteCharacters,
    nonFavoriteCharacters,
    deletedCharacters,
    favorites,
    selectedId,
    setSelectedId,
    toggleFavorite,
    error,
    loading,
    buttonRef,
    softDelete,
    restore,
    sortOrder,
    setSortOrder,
    statusQuery,
    genderQuery,
}) => (
    <aside className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4 h-full flex-shrink-0 bg-cool-white-100 pt-8.5 px-4 gap-y-4 border-r border-gray-100">
        <div className="w-full flex px-2 p-2">
            <Typography variant="h1" size="2xl" color="text-gray-800" weight="bold">
                Rick and Morty list
            </Typography>
        </div>
        {/* Search bar */}
        <form className="flex w-full h-[52px] items-center pl-5 pr-[13px] gap-2 rounded-lg bg-cool-gray-100">
            <HiOutlineSearch size={20} color="#9CA3AF" />
            <input
                className="flex-1 outline-none text-[#9CA3AF] placeholder-[#9CA3AF] text-base"
                type="text"
                placeholder="Search or filter results"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button ref={buttonRef} selected={filterOpen} onClick={toggleFilterOpen} width="w-9.5" aspect="aspect-square">
                <HiOutlineAdjustments size={24} color="#8054C7" />
            </Button>
        </form>
        {/* Desktop popup */}
        <div ref={filterRef} className="relative w-full hidden md:block">
            <Poppup open={filterOpen}>
                <Filters
                    characterFilter={characterFilter}
                    setCharacterFilter={setCharacterFilter}
                    specieFilter={specieFilter}
                    setSpecieFilter={setSpecieFilter}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    genderFilter={genderFilter}
                    setGenderFilter={setGenderFilter}
                    characterQuery={characterQuery}
                    specieQuery={specieQuery}
                    handleFilterClick={handleFilterClick}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    statusQuery={statusQuery}
                    genderQuery={genderQuery}
                />
            </Poppup>
        </div>
        {/* Mobile bottom sheet */}
        <BottomSheet open={filterOpen} onClose={toggleFilterOpen} title="Filters">
            <Filters
                characterFilter={characterFilter}
                setCharacterFilter={setCharacterFilter}
                specieFilter={specieFilter}
                setSpecieFilter={setSpecieFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                characterQuery={characterQuery}
                specieQuery={specieQuery}
                handleFilterClick={handleFilterClick}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                statusQuery={statusQuery}
                genderQuery={genderQuery}
            />
        </BottomSheet>
        <div className="flex flex-col w-full overflow-scroll">
            {/* Starred Characters */}
            {characterQuery !== "others" && favoriteCharacters.length > 0 && (
                <CharacterSection
                    title="STARRED CHARACTERS"
                    characters={favoriteCharacters}
                    favorites={favorites}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    toggleFavorite={toggleFavorite}
                    softDelete={softDelete}
                />
            )}
            {/* Characters */}
            {error ? (
                <div className="text-center mt-10 text-primary-700">Error: {error.message}</div>
            ) : loading ? (
                <div className="text-center mt-10 text-primary-700">Cargando...</div>
            ) : (
                characterQuery !== "starred" && (
                    <CharacterSection
                        title="CHARACTERS"
                        characters={nonFavoriteCharacters}
                        favorites={favorites}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        toggleFavorite={toggleFavorite}
                        softDelete={softDelete}
                    />
                )
            )}
            {/* Deleted Characters */}
            {deletedCharacters && deletedCharacters.length > 0 && (
                <CharacterSection
                    title="DELETED CHARACTERS"
                    characters={deletedCharacters}
                    favorites={favorites}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    toggleFavorite={toggleFavorite}
                    isDeleted={true}
                    restore={restore}
                />
            )}
        </div>
    </aside>
);

export default Sidebar;
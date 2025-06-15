import React from "react";
import Button from "../../atoms/Button/Button";
import type { FiltersProps } from "./models/filters.model";
import FilterSection from "../../molecules/FilterSection/FilterSection";

const Filters: React.FC<FiltersProps> = ({
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
    sortOrder,
    setSortOrder,
    statusQuery,
    genderQuery
}) => {
    const isButtonDisabled = characterFilter === characterQuery && specieFilter === specieQuery && statusFilter === statusQuery && genderFilter === genderQuery

    return (
        <div className="flex flex-col justify-between h-full p-6 overflow-y-scroll gap-y-6">
            <div className="flex flex-col gap-y-6">
                <FilterSection
                    title="Sort by Name"
                    filters={[
                        { label: "A-Z", value: "asc" },
                        { label: "Z-A", value: "desc" },
                    ]}
                    selected={sortOrder}
                    onChange={setSortOrder}
                />
                <FilterSection
                    title="Character"
                    filters={[
                        { label: "All", value: "all" },
                        { label: "Starred", value: "starred" },
                        { label: "Others", value: "others" },
                    ]}
                    selected={characterFilter}
                    onChange={setCharacterFilter}
                />
                <FilterSection
                    title="Specie"
                    filters={[
                        { label: "All", value: "all" },
                        { label: "Human", value: "human" },
                        { label: "Alien", value: "alien" },
                    ]}
                    selected={specieFilter}
                    onChange={setSpecieFilter}
                />
                <FilterSection
                    title="Status"
                    filters={[
                        { label: "All", value: "all" },
                        { label: "Alive", value: "alive" },
                        { label: "Dead", value: "dead" },
                        { label: "Unknown", value: "unknown" },
                    ]}
                    selected={statusFilter}
                    onChange={setStatusFilter}
                />
                <FilterSection
                    title="Gender"
                    filters={[
                        { label: "All", value: "all" },
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Genderless", value: "genderless" },
                        { label: "Unknown", value: "unknown" },
                    ]}
                    selected={genderFilter}
                    onChange={setGenderFilter}
                />
            </div>
            <Button
                variant="secondary"
                text="Filter"
                disabled={isButtonDisabled}
                onClick={handleFilterClick}
                padding="py-3"
            />
        </div>
    )
};

export default Filters;
// This code defines a Filters component that provides various filtering options for characters in a list.
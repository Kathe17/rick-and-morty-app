import React from "react";
import Typography from "../../atoms/Typography/Typography";
import CharacterCard from "../../molecules/CharacterCard/CharacterCard";
import type { CharacterSectionProps } from "./models/characterSection.model";
import type { Character } from "../../../models/character.model";

const CharacterSection: React.FC<CharacterSectionProps> = ({
    title,
    characters,
    selectedId,
    setSelectedId,
    favorites,
    toggleFavorite,
    softDelete,
    isDeleted,
    restore
}) => (
    <div className="w-full flex flex-col gap-y-2">
        <div className="flex px-5 py-4">
            <Typography variant="p" size="xs" color="text-gray-500">
                {`${title} (${characters.length})`}
            </Typography>
        </div>
        <ul className="flex flex-col gap-1">
            {characters.map((char: Character) => (
                <React.Fragment key={char.id}>
                    <CharacterCard
                        char={char}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        onSoftDelete={softDelete}
                        isDeleted={!!isDeleted}
                        onRestore={restore}
                    />
                    <div className="w-full border-b border-gray-200" key={`divider-${char.id}`}></div>
                </React.Fragment>
            ))}
        </ul>
    </div>
);

export default CharacterSection
import React from "react";
import Typography from "../atoms/Typography";
import CharacterCard from "../molecules/CharacterCard";

interface CharacterSectionProps {
    title: string;
    characters: any[];
    selectedId?: string | null;
    setSelectedId: (id: string) => void;
    favorites: string[];
    toggleFavorite: (id: string) => void;
    softDelete?: (id: string) => void;
    isDeleted?: boolean;
    restore?: (id: string) => void;
}

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
            {characters.map((char: any) => (
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
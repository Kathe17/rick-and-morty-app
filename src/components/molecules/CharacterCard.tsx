import React from "react";
import FavoriteButton from "../atoms/FavoriteButton";
import Typography from "../atoms/Typography";
import { useNavigate } from "react-router-dom";
import { LiaTrashAlt, LiaTrashRestoreAltSolid } from "react-icons/lia";

interface CharacterCardProps {
  char: {
    id: string;
    name: string;
    image: string;
    species: string;
  };
  selectedId?: string | null;
  setSelectedId: (id: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  onSoftDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  isDeleted?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  char,
  selectedId,
  setSelectedId,
  favorites,
  toggleFavorite,
  onSoftDelete,
  onRestore,
  isDeleted,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      // Responsive: navega a la ruta del personaje
      navigate(`/character/${char.id}`);
    } else {
      // Desktop: selecciona el personaje
      setSelectedId(char.id);
    }
  };

  return (
    <li
      key={char.id}
      className={`flex justify-between items-center gap-3 px-2 py-2 rounded-xl cursor-pointer transition select-none relative
        ${selectedId === char.id ? "bg-primary-100 shadow" : "hover:bg-primary-100"}
        ${isDeleted ? "opacity-50 pointer-events-none" : ""}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-x-4">
        <img
          src={char.image}
          alt={char.name}
          className="w-10 h-10 rounded-full border-2 border-primary-600"
        />
        <div className="flex flex-col items-start">
          <Typography
            variant="p"
            size="base"
            color="text-gray-900"
            weight="semibold"
          >
            {char.name}
          </Typography>
          <Typography
            variant="p"
            size="base"
            color="text-gray-500"
          >
            {char.species}
          </Typography>
        </div>
      </div>
      <div className="flex gap-x-1 items-center">
        <FavoriteButton
          isFavorite={favorites.includes(char.id)}
          onToggle={() => toggleFavorite(char.id)}
          isCardSelected={selectedId === char.id}
        />
        {/* Soft-delete/restore button */}
        {onSoftDelete && !isDeleted && (
          <button
            className="p-1 rounded bg-red-100 text-red-700 text-xs font-semibold hover:bg-red-200 transition"
            onClick={e => { e.stopPropagation(); onSoftDelete(char.id); }}
          >
            <LiaTrashAlt size={24} />
          </button>
        )}
        {onRestore && isDeleted && (
          <button
            className="p-1 rounded bg-green-100 text-secondary-600 text-xs font-semibold hover:bg-green-300 transition pointer-events-auto"
            style={{ pointerEvents: 'auto' }}
            onClick={e => { e.stopPropagation(); onRestore(char.id); }}
          >
            <LiaTrashRestoreAltSolid size={24} />
          </button>
        )}
      </div>
    </li>
  );
};

export default CharacterCard;
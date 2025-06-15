import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import React from "react";

interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggle: () => void;
    isCardSelected?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggle, isCardSelected = false }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onToggle();
    };
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`
                flex items-center justify-center w-8 h-8 rounded-full transition
                ${isCardSelected ? "bg-white" : "bg-transparent"}
            `}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? <FaHeart
                className="text-secondary-600"
                aria-hidden="true"
                size={24}
            />
                :
                <FaRegHeart className="text-cool-gray-300" aria-hidden="true" size={24} />
            }
        </button>
    );
};

export default FavoriteButton;
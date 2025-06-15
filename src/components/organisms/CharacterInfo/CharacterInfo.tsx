
import React, { useEffect, useRef, useState } from "react";
import Typography from "../../atoms/Typography/Typography";
import { FaHeart } from "react-icons/fa";
import CharacterInfoItem from "../../molecules/CharacterInfoItem";
import Button from "../../atoms/Button/Button";
import type { CharacterInfoProps } from "./models/characterInfo.model";

const CharacterInfo: React.FC<CharacterInfoProps> = ({
    char,
    isFavorite,
}) => {
    // Comentarios por personaje (persistencia localStorage)
    const [comments, setComments] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const lastIdRef = useRef<string | undefined>(undefined);

    // Cargar comentarios solo si hay id válido y solo si cambia el id
    useEffect(() => {
        if (char?.id && char.id !== lastIdRef.current) {
            const saved = localStorage.getItem(`comments-${char.id}`);
            setComments(saved ? JSON.parse(saved) : []);
            lastIdRef.current = char.id;
        }
        // No limpiar comentarios si no hay id
    }, [char?.id]);

    // Guardar comentarios al cambiar SOLO si hay id
    useEffect(() => {
        if (char?.id) {
            localStorage.setItem(`comments-${char.id}`, JSON.stringify(comments));
        }
    }, [comments, char?.id]);

    const handleAddComment = () => {
        if (input.trim()) {
            setComments(prev => [input.trim(), ...prev]);
            setInput("");
        }
    };

    if (!char) {
        return (
            <main className="flex-1 flex flex-col bg-white min-h-screen min-w-0 p-0 overflow-auto">
                <div className="flex items-center justify-center w-full h-full">
                    <Typography variant="p" size="lg" color="text-gray-500">
                        Character not found
                    </Typography>
                </div>
            </main>

        );
    }

    return (
        <div className="w-full h-full flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
                <div className="relative w-[75px] aspect-square">
                    <img
                        src={char.image}
                        alt={char.name}
                        className="rounded-full"
                    />
                    {isFavorite && (
                        <div className="absolute z-20 bottom-0 right-0 flex items-center justify-center w-8 h-8 rounded-full p-1 bg-white">
                            <FaHeart
                                className=" text-secondary-600"
                                aria-hidden="true"
                                size={24}
                            />
                        </div>
                    )}
                </div>
                <div className="flex text-start gap-2">
                    <Typography variant="h1" size="xl" color="text-gray-900" weight="bold">
                        {char.name}
                    </Typography>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col w-full">
                    <CharacterInfoItem label="Specie" value={char.species ?? "Unknown"} />
                    <CharacterInfoItem label="Status" value={char.status ?? "Unknown"} />
                    <CharacterInfoItem label="Gender" value={char.gender ?? "Unknown"} />
                </div>
            </div>
            {/* Comentarios */}
            <div className="w-full mt-2">
                <Typography variant="h2" size="lg" color="text-gray-900" weight="semibold" className="mb-2">
                    Comments
                </Typography>
                <div className="flex items-center gap-2 mb-2">
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleAddComment(); }}
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-gray-50 text-gray-900"
                        maxLength={200}
                    />
                    <Button
                        onClick={handleAddComment}
                        disabled={!input.trim()}
                        variant="secondary"
                        text="Add"
                        padding="py-2.5"
                        width="w-1/2 sm:w-1/5"
                    />
                </div>
                <ul className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                    {comments.length === 0 && (
                        <li className="text-gray-400 text-sm">No comments yet.</li>
                    )}
                    {comments.map((c, i) => (
                        <li key={i} className="bg-gray-100 rounded-lg px-3 py-2 text-gray-800 text-sm">
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CharacterInfo;
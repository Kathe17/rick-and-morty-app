import { useState } from "react";

export function useCharacterSearch() {
    const [name, setName] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return {
        name,
        setName,
        selectedId,
        setSelectedId,
    };
}
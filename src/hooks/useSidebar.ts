import { useRef, useState, useEffect } from "react";

export function useSidebar() {
    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleFilterOpen = () => setFilterOpen(prev => !prev);

    // Cierra el filtro si haces click fuera SOLO en desktop (md+)
    useEffect(() => {
        const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
        function handleClickOutside(event: MouseEvent) {
            if (
                buttonRef.current &&
                buttonRef.current.contains(event.target as Node)
            ) {
                return;
            }
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target as Node)
            ) {
                setFilterOpen(false);
            }
        }
        if (filterOpen && isDesktop()) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [filterOpen]);

    return {
        filterOpen,
        setFilterOpen,
        filterRef,
        buttonRef,
        toggleFilterOpen,
    };
}
import { useState } from 'react';

export function useFavorites<T = string>() {
  const [favorites, setFavorites] = useState<T[]>(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (item: T) => {
    setFavorites((prev) => {
      const exists = prev.includes(item);
      const updated = exists ? prev.filter(f => f !== item) : [...prev, item];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return { favorites, toggleFavorite };
}

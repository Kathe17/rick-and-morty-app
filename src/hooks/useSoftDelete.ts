import { useState } from 'react';

export function useSoftDelete() {
  const [deleted, setDeleted] = useState<string[]>(() => {
    const stored = localStorage.getItem('deleted-characters');
    return stored ? JSON.parse(stored) : [];
  });

  const softDelete = (id: string) => {
    const updated = [...deleted, id];
    setDeleted(updated);
    localStorage.setItem('deleted-characters', JSON.stringify(updated));
  };

  const restore = (id: string) => {
    const updated = deleted.filter(d => d !== id);
    setDeleted(updated);
    localStorage.setItem('deleted-characters', JSON.stringify(updated));
  };

  return { deleted, softDelete, restore };
}

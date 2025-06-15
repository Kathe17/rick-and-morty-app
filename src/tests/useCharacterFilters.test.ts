import { renderHook, act } from '@testing-library/react';
import { useCharacterFilters } from '../hooks/useCharacterFilters';

describe('useCharacterFilters', () => {
    it('should update filters and queries correctly', () => {
        const { result } = renderHook(() => useCharacterFilters());

        act(() => {
            result.current.setCharacterFilter('starred');
            result.current.setSpecieFilter('alien');
            result.current.setStatusFilter('alive');
            result.current.setGenderFilter('female');
            result.current.setSortOrder('desc');
        });

        expect(result.current.characterFilter).toBe('starred');
        expect(result.current.specieFilter).toBe('alien');
        expect(result.current.statusFilter).toBe('alive');
        expect(result.current.genderFilter).toBe('female');
        expect(result.current.sortOrder).toBe('desc');
        // Queries should still be default before applyFilters
        expect(result.current.characterQuery).toBe('all');
        expect(result.current.specieQuery).toBe('all');
        expect(result.current.statusQuery).toBe('all');
        expect(result.current.genderQuery).toBe('all');

        act(() => {
            result.current.applyFilters();
        });

        expect(result.current.characterQuery).toBe('starred');
        expect(result.current.specieQuery).toBe('alien');
        expect(result.current.statusQuery).toBe('alive');
        expect(result.current.genderQuery).toBe('female');
    });
});

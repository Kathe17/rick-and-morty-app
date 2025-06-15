import { renderHook, act } from '@testing-library/react';
import { useFavorites } from '../hooks/useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds and removes favorites', () => {
    const { result } = renderHook(() => useFavorites<string>());
    act(() => {
      result.current.toggleFavorite('1');
    });
    expect(result.current.favorites).toContain('1');
    act(() => {
      result.current.toggleFavorite('1');
    });
    expect(result.current.favorites).not.toContain('1');
  });
});

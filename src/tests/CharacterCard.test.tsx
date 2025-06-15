import { render, screen } from '@testing-library/react';
import CharacterCard from '../components/molecules/CharacterCard/CharacterCard';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterCard', () => {
    it('renders character info', () => {
        render(
            <MemoryRouter>
                <CharacterCard
                    char={{ id: '1', name: 'Rick', image: 'rick.png', species: 'Human' }}
                    selectedId={null}
                    setSelectedId={() => { }}
                    favorites={[]}
                    toggleFavorite={() => { }}
                />
            </MemoryRouter>
        );
        expect(screen.getByText('Rick')).toBeInTheDocument();
        expect(screen.getByText('Human')).toBeInTheDocument();
        expect(screen.getByAltText('Rick')).toBeInTheDocument();
    });
});

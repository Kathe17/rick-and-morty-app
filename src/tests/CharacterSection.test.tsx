import { render, screen } from '@testing-library/react';
import CharacterSection from '../components/organisms/CharacterSection';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterSection', () => {
    it('renders section title and character cards', () => {
        const characters = [
            { id: '1', name: 'Rick', image: 'rick.png', species: 'Human' },
            { id: '2', name: 'Morty', image: 'morty.png', species: 'Human' },
        ];
        render(
            <MemoryRouter>
                <CharacterSection
                    title="CHARACTERS"
                    characters={characters}
                    selectedId={null}
                    setSelectedId={() => { }}
                    favorites={[]}
                    toggleFavorite={() => { }}
                />
            </MemoryRouter>
        );
        expect(screen.getByText('CHARACTERS (2)')).toBeInTheDocument();
        expect(screen.getByText('Rick')).toBeInTheDocument();
        expect(screen.getByText('Morty')).toBeInTheDocument();
    });
});

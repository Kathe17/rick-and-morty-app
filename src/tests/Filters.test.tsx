import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/organisms/Filters/Filters';

describe('Filters', () => {
    it('renders all filter sections and allows changing filters', () => {
        const setCharacterFilter = jest.fn();
        const setSpecieFilter = jest.fn();
        const setStatusFilter = jest.fn();
        const setGenderFilter = jest.fn();
        const setSortOrder = jest.fn();
        const handleFilterClick = jest.fn();

        render(
            <Filters
                characterFilter="all"
                setCharacterFilter={setCharacterFilter}
                specieFilter="all"
                setSpecieFilter={setSpecieFilter}
                statusFilter="all"
                setStatusFilter={setStatusFilter}
                genderFilter="all"
                setGenderFilter={setGenderFilter}
                characterQuery="other"
                specieQuery="other"
                handleFilterClick={handleFilterClick}
                sortOrder="asc"
                setSortOrder={setSortOrder}
                statusQuery="dead"
                genderQuery="female"
            />
        );

        expect(screen.getByText('Sort by Name')).toBeInTheDocument();
        expect(screen.getByText('Character')).toBeInTheDocument();
        expect(screen.getByText('Specie')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
        expect(screen.getByText('Gender')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Z-A'));
        expect(setSortOrder).toHaveBeenCalledWith('desc');
        fireEvent.click(screen.getByText('A-Z'));
        expect(setSortOrder).toHaveBeenCalledWith('asc');

        fireEvent.click(screen.getByText('Starred'));
        expect(setCharacterFilter).toHaveBeenCalledWith('starred');
        fireEvent.click(screen.getByText('Alien'));
        expect(setSpecieFilter).toHaveBeenCalledWith('alien');
        fireEvent.click(screen.getByText('Alive'));
        expect(setStatusFilter).toHaveBeenCalledWith('alive');
        fireEvent.click(screen.getByText('Female'));
        expect(setGenderFilter).toHaveBeenCalledWith('female');

        fireEvent.click(screen.getByText(/Filter|Filtrar/i));
        expect(handleFilterClick).toHaveBeenCalled();
    });
});

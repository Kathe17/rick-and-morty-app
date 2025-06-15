import { render, screen } from '@testing-library/react';
import CharacterList from '../pages/CharacterList';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS } from '../graphql/queries';
import { MemoryRouter } from 'react-router-dom';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { name: '', status: '', species: '', gender: '' },
    },
    result: {
      data: {
        characters: {
          info: { count: 1, pages: 1, next: null, prev: null },
          results: [
            { id: '1', name: 'Rick', image: 'rick.png', species: 'Human', status: 'Alive', gender: 'Male' },
          ],
        },
      },
    },
  },
];

describe('CharacterList', () => {
  it('renders character cards and filters', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <CharacterList />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(await screen.findByText('Rick')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search or filter results')).toBeInTheDocument();
  });
});

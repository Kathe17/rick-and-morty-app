import { render, screen } from '@testing-library/react';
import CharacterDetail from '../pages/CharacterDetail';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { GET_CHARACTER_BY_ID } from '../graphql/queries';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_BY_ID,
      variables: { id: '1' },
    },
    result: {
      data: {
        character: {
          id: '1',
          name: 'Rick',
          image: 'rick.png',
          species: 'Human',
          status: 'Alive',
          gender: 'Male',
        },
      },
    },
  },
];

describe('CharacterDetail', () => {
  it('renders character detail info', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/character/1"]}>
          <Routes>
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );
    expect(await screen.findByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
  });
});

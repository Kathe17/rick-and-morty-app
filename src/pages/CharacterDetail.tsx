import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useFavorites } from '../hooks/useFavorites';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_BY_ID } from '../graphql/queries';
import CharacterInfo from '../components/organisms/CharacterInfo/CharacterInfo';

const CharacterDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { favorites } = useFavorites<string>();
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, { variables: { id } });

  if (loading) return <div className="text-center mt-10 text-primary-700">Cargando...</div>;
  if (error || !data?.character) return <div className="text-center mt-10 text-primary-700">No encontrado</div>;

  const isFavorite = favorites.includes(id!);

  return (
    <main className="w-full flex flex-col bg-white min-h-screen min-w-0 px-6 overflow-auto">
      <div className="flex items-center py-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center hover:bg-primary-50 transition-colors duration-150"
          aria-label="Volver al inicio"
        >
          <IoArrowBackOutline className="text-primary-600" size={24} />
        </button>
      </div>
      <CharacterInfo char={data.character} isFavorite={isFavorite} />
    </main>
  );
};

export default CharacterDetail;
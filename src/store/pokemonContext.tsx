import { createContext } from 'react';
import { PokemonInfoContext } from '@/Types'

export const PokemonContext = createContext<PokemonInfoContext>({
  pokemon: null,
  setPokemon: () => {},
});
export interface PokemonInfo {
  name: string;
}

export interface PokemonInfoContext {
  pokemon: string | null;
  setPokemon: React.Dispatch<React.SetStateAction<string>>;
}

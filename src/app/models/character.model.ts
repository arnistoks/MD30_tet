export interface CharacterApiResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterQuery {
  name: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown' | '';
}

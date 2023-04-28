import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { client, Error } from '@/utils/api';

// https://hahow-recruit.herokuapp.com/heroes
// GET /heroes swr
export function useListHeroes() {}

// https://hahow-recruit.herokuapp.com/heroes/:heroId
// GET /heroes/:heroId with swr
export function useSingleHero() {}

// https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// GET /heroes/:heroId/profile with swr
export function useHeroProfile() {}

//https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
//PATCH with mutation
export function useAddProfileInfo() {}

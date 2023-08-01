import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { client } from '../../../utils/api';

// https://hahow-recruit.herokuapp.com/heroes
// GET /heroes swr
interface IUseListHeroes {
  id: string;
  name: string;
  image: string;
}

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export function useListHeroes() {
  return useQuery({
    queryKey: ['heros'],
    queryFn: async (): Promise<IUseListHeroes[]> => {
      await wait(2000);
      const res = await client.get('/heroes');
      return res.data;
    }
  });
}

// https://hahow-recruit.herokuapp.com/heroes/:heroId
// GET /heroes/:heroId with swr

interface IHeroProfile {
  str: number;
  int: number;
  agi: number;
  luk: number;
}
export function useSingleHero(id?: IUseListHeroes['id'] | string) {
  return useQuery({
    queryKey: ['heros', id],
    queryFn: async () => {
      await wait(2000);
      const res = await client.get<IUseListHeroes>(`/heroes/${id}`);
      return res;
    }
  });
}

// https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// GET /heroes/:heroId/profile with swr

// interface ISubmitInfo {
//   str: number;
//   int: number;
//   agi: number;
//   luk: number;
// }
export function useHeroProfile(id?: IUseListHeroes['id'] | string) {
  return useQuery({
    queryKey: ['profile', id],
    queryFn: async () => {
      const res = await client.get(`/heroes/${id}/profile`);
      return res;
    }
  });
}
//https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
//PATCH with mutation
export function useAddProfileInfo(id?: IUseListHeroes['id'] | string) {
  return useMutation<IUseListHeroes[], Error, IHeroProfile, string[]>({
    mutationKey: ['profile', id],
    mutationFn: async (arg) => {
      const res = await client.patch<IUseListHeroes[]>(`/heroes/${id}/profile`, arg);
      return res.data;
    }
  });
}

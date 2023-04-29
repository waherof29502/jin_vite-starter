import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { client, Error } from '../../../utils/api';

// https://hahow-recruit.herokuapp.com/heroes
// GET /heroes swr
interface IUseListHeroes {
  id: string;
  name: string;
  image: string;
}

export function useListHeroes() {
  return useSWR<IUseListHeroes[], Error, string>('/heroes', async (url: any) => {
    const res = await client.get(url);
    return res.data;
  });
}

// https://hahow-recruit.herokuapp.com/heroes/:heroId
// GET /heroes/:heroId with swr
export function useSingleHero(id?: IUseListHeroes['id'] | string) {
  return useSWR<IUseListHeroes, Error, string | null>(`/heroes/${id}`, async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

interface IHeroProfile {
  str: number;
  int: number;
  agi: number;
  luk: number;
}
// https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// GET /heroes/:heroId/profile with swr
export function useHeroProfile(id?: IUseListHeroes['id'] | string) {
  return useSWR(`/heroes/${id}/profile`, async (url) => {
    const res = await client.get(url);
    return res;
  });
}
interface ISubmitInfo {
  str: number;
  int: number;
  agi: number;
  luk: number;
}

//https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
//PATCH with mutation
export function useAddProfileInfo(id?: IUseListHeroes['id'] | string) {
  return useSWRMutation<IUseListHeroes, Error, string, ISubmitInfo>(`/heroes/${id}/profile`, async (url, { arg }) => {
    const res = await client.patch(url, arg);
    return res.data;
  });
}

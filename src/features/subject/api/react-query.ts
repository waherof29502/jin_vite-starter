import { useQuery } from '@tanstack/react-query';

import { client, Error } from '../../../utils/api';

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

// https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// GET /heroes/:heroId/profile with swr

// interface ISubmitInfo {
//   str: number;
//   int: number;
//   agi: number;
//   luk: number;
// }

//https://hahow-recruit.herokuapp.com/heroes/:heroId/profile
//PATCH with mutation

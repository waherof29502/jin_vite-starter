import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
export { AxiosError as Error } from 'axios';

export const client = axios.create({ baseURL, timeout: 10000 });

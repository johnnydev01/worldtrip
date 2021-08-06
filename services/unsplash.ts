import { createApi } from 'unsplash-js';

  export const unsplash = createApi({
    accessKey: String(process.env.UNSPLASH_ACCESS_KEY)
  });
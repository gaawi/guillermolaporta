import { defineConfig } from 'astro/config';

export default defineConfig({
  // Served at the root of the custom domain. There is no base path: adding one
  // prefixes every asset and link with a directory that does not exist here.
  site: 'https://guillermolaporta.com',

  // Old addresses that were published and may have been shared.
  redirects: {
    // The first version of the children's activities, live for about an hour
    // on the day of the pilot before it became the Sound Hunt.
    '/queens-musical-passport/play/': '/queens-musical-passport/sounds/',
  },
});

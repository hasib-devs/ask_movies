export default ({ env }) => [
  "strapi::errors",
  // "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  // "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'image.tmdb.org', 'mlwbd.skin', 'cdn.jsdelivr.net', 'strapi.io', `s3.${env('AWS_REGION')}.amazonaws.com`, '*'],
        },
      }
    },
  },

  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 3000000000, // 3GB multipart data, modify here limit of uploaded file size
      },
    },
  },
];

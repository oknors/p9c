module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 11121),
  url: 'https://api.parallelcoin.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a1f691d9c4a55c7fb6fa9dbb798f16b4'),
    },
  },
});

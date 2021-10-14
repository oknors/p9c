module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 11122),
  url: 'http://localhost',
  proxy:true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a1f691d9c4a55c7fb6fa9dbb798f16b4'),
    },
  }
});

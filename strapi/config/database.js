module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '/var/db/sqlite/parallelcoin.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

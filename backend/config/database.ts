import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql2');

  const connections = {
    mysql2: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { 
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10) 
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { 
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10) 
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  const config = {
    connection: {
      client,
      ...connections[client],
    },
  };

  // Add connection logging
  console.log('🔗 Database Configuration:');
  console.log(`   Client: ${client}`);
  
  if (client === 'mysql' || client === 'mysql2') {
    console.log(`   Host: ${env('DATABASE_HOST', 'localhost')}`);
    console.log(`   Port: ${env.int('DATABASE_PORT', 3306)}`);
    console.log(`   Database: ${env('DATABASE_NAME', 'strapi')}`);
    console.log(`   Username: ${env('DATABASE_USERNAME', 'strapi')}`);
    console.log('   Password: [HIDDEN]');
    console.log('   SSL: ' + (env.bool('DATABASE_SSL', false) ? 'Enabled' : 'Disabled'));
  } else if (client === 'sqlite') {
    console.log(`   File: ${path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db'))}`);
  }
  
  console.log('');

  return config;
};

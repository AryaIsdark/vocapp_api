import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT ?? 5000,
  host: process.env.HOST ?? 'localhost',
  DBHost: process.env.DB_DOMAIN,
}));

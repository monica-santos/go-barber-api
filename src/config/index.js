import 'dotenv/config'

export default {
  ...process.env,
  APP_URL: process.env.APP_URL,
  NODE_ENV: process.env.NODE_ENV,
  TOKEN_KEY: process.env.TOKEN_KEY,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  SENTRY_DSN: process.env.SENTRY_DSN,
}

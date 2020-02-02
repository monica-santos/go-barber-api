import env from 'dotenv';

env.config();

export default {
  tokenKey: process.env.TOKEN_KEY,
  expiresIn: '7d',
};

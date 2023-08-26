import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  database: {
    mongoURI: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};



import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });
export const JWT_SECRET = process.env.JWT_SECRET as string 

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt:{
      jwt_secret: process.env.JWT_SECRET,
      expires_in: process.env.EXPIRES_IN,
  }
};
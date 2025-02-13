import dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseURL: process.env.BASE_URL,
    privyID: process.env.PID,
    password: process.env.PASSWORD,
  };

  
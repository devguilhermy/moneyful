import axios from 'axios';

export const api = axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://moneyful-live.vercel.app/api'
            : 'https://localhost:3000/api',
});

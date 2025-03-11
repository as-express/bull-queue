import { Redis } from 'ioredis';
import { env } from './env.js';
import 'colors';
export const redis = new Redis({
    host: String(env.REDIS_HOST) || 'localhost',
    port: Number(env.REDIS_PORT) || 6379,
    maxRetriesPerRequest: null
});
redis.on('error', () => {
    console.log('Redis connection error'.bgRed);
});

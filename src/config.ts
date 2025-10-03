import { R } from '@core/utils/r';
interface AppConfig {
  BUILD_MODE: 'dev' | 'production';
  BUILD_ENV: string;

  IS_DEV: boolean;

  API_URL: string;
  API_URL_NAKED: string;

  DEV_USERNAME?: string;
  DEV_PASSWORD?: string;

  PUSHER_KEY: string;
}

export const Config: AppConfig = process.env.BUILD_CONFIG as any;

Config.BUILD_MODE = process.env.BUILD_MODE as any;
Config.BUILD_ENV = process.env.BUILD_ENV as any;

Config.IS_DEV = Config.BUILD_MODE === 'dev';

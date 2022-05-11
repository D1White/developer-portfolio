declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string;
      NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: string;
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

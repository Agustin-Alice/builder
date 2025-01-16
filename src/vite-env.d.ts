/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_API_KEY_BUILDER: string;

  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

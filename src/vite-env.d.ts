/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REDIRECT_SESSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

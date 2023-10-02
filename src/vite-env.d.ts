
interface ImportMetaEnv {
  readonly VITE_APIGATEWAY_APIKEY: string;
}

// 型宣言ファイルについて
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 画像ファイルの型宣言について
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

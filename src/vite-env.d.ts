/// <reference types="vite/client" />

declare module 'react' {
  interface HTMLAttributes<T> {
    [attributeName: string]: any;
  }

  interface SVGAttributes<T> {
    [attributeName: string]: any;
  }
}

export {};

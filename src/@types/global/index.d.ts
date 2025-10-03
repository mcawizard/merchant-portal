type Constructor<T = any> = new (...args: any[]) => T;

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

declare namespace React {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    switch?: 'none';
  }

  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

interface Window {
  CollectJS: any;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

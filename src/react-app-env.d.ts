declare module "*.module.css" {
  const classes: {
    readonly [key: string]: string;
  };

  export default classes;
}

declare module "*.module.scss" {
  const classes: {
    readonly [key: string]: string;
  };

  export default classes;
}

declare module "*.module.sass" {
  const classes: {
    readonly [key: string]: string;
  };

  export default classes;
}

declare module "*.svg" {
  const content: string;
  export const ReactComponent: any;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}

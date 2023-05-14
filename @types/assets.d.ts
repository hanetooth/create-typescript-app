declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.ico';
declare module '*.webp';

declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.otf';
declare module '*.eot';

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

//TODO: Add more declarations for other asset types as needed

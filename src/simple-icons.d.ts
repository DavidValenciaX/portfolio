declare module 'simple-icons' {
  export interface SimpleIcon {
    title: string;
    slug: string;
    svg: string;
    path: string;
    source: string;
    hex: string;
    guidelines?: string;
    license?: {
      type: string;
      url?: string;
    };
  }

  export const siHtml5: SimpleIcon;
  export const siCss: SimpleIcon;
  export const siJavascript: SimpleIcon;
  export const siNodedotjs: SimpleIcon;
  export const siExpress: SimpleIcon;
  export const siSwagger: SimpleIcon;
  export const siPostgresql: SimpleIcon;
  export const siMongodb: SimpleIcon;
  export const siJest: SimpleIcon;
  export const siGithubactions: SimpleIcon;
  export const siGit: SimpleIcon;
  export const siGithub: SimpleIcon;
  export const siWordpress: SimpleIcon;
  export const siWoo: SimpleIcon;
}


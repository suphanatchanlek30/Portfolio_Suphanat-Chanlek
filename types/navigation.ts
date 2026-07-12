// data/navigation.ts

export type NavigationLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  iconSize: number;
  buttonClassName: string;
  svgPath: string;
};

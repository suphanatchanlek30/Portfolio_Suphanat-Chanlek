// types/navigation.ts

/** A navigation link item used in menus and nav bars. */
export type NavigationLink = {
  /** Display text for the link */
  label: string;
  /** URL or anchor to navigate to */
  href: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
};

/** A social media link with its SVG icon data. */
export type SocialLink = {
  /** Accessible label (e.g., "GitHub") */
  label: string;
  /** Full URL to the social profile */
  href: string;
  /** SVG path data for the icon */
  svgPath: string;
};

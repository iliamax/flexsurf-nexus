
export interface NavItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  key?: string;
  items?: {
    label: string;
    href: string;
  }[];
}

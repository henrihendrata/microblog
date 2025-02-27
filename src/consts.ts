import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "catatan.henri",
  DESCRIPTION: "catatan kecil dan ide yang terbuang.",
  EMAIL: "hendrata.henri@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "catatan kecil henri",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "project kecil.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/henrihendratas",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/henrihendrata/",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/henri-hendrata-9ab04627/",
  },
];

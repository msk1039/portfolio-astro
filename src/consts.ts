export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'msk1039',
  DESCRIPTION:
    'I am a hobbyist programmer, currently a freshmen in a bachelors of informtation technology degree, who likes to write & build his mind out',
  EMAIL: 'mayz@edbn.me',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://mew.mine.bz',
}

export const NAV_LINKS: Link[] = [
  // { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/design', label: 'design' },
  { href: '/art', label: 'art' },
  // { href: '/authors', label: 'authors' },
  // { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  // { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/msk1039', label: 'GitHub' },
  // { href: 'https://twitter.com/enscry', label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/mayank-kadam-82a60227a/', label: 'LinkedIn' },
  { href: 'mayz@edbn.me', label: 'Email' },
  // { href: '/rss.xml', label: 'RSS' },
]

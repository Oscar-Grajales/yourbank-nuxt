export type NavigationItem = {
    label: string
    to: string
}

export const navigation: NavigationItem[] = [
  {
    label: 'navigation.home',
    to: '/',
  },
  {
    label: 'navigation.careers',
    to: '/careers',
  },
  {
    label: 'navigation.about',
    to: '/about',
  },
  {
    label: 'navigation.security',
    to: '/security',
  },
] as const
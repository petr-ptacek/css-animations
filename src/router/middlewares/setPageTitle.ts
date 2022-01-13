import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function setPageTitle(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
  if ( to.meta.title ) {
    window.document.title = to.meta.title;
  }

  next();
}
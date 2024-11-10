import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const isAuthenticatedGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    const user = localStorage.getItem('userId');
    localStorage.setItem('lastPath', to.fullPath);

    if (!user) {
        return next({ name: 'Login' });
    }

    return next();
};

export default isAuthenticatedGuard;
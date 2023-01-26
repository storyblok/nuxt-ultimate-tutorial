/* Reversed remove trailing slash from stackoverflow
https://stackoverflow.com/questions/74261193/nuxt-3-how-to-remove-trailing-slash#:~:text=export%20default%20defineNuxtRouteMiddleware,%3A%20301%20%7D)%3B%0A%20%20%7D%0A%7D)
*/

// eslint-disable-next-line consistent-return
export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/' && !to.path.endsWith('/')) {
    const { path, query, hash } = to;
    const nextRoute = { path: `${path}/`, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
  }
});

import Vue from "vue";
import Router from "vue-router";
import User from "./views/User.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "user",
      component: User
    }
  ]
});

router.beforeEach((to, from, next) => {
  var publicPages = ["/login"]; // Kaikki julkiset sivut lueteltuna.
  var authRequired = !publicPages.includes(to.path); // Tarkistaa tarvitseeko sivu autentikointia.
  var loggedIn = false;
  if (sessionStorage.getItem('logged') !== null) {
    loggedIn = JSON.parse(sessionStorage.getItem("logged")).user.logged; // Väliaikainen kirjautumis DEMO!
  }
  if (authRequired && (loggedIn == false || loggedIn == null)) {
    // Ohjataan kirjautumiseen jos kohteena muu kuin /login
    next("/login");
  } else if (to.path == "/login" && loggedIn) {
    // Ohjataan kotisivulle jos kirjautuneena ja yritetään navigoida /login
    next("/");
  } else {
    // Muuten jatketaan normaalisti
    next();
  }
});

export default router;

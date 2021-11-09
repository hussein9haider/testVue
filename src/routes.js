import HomePage from './pages/HomePage.vue'
import SearchPage from './pages/SearchPage.vue'
import CategoriesPage from './pages/CategoriesPage.vue'
import LivePage from './pages/LivePage.vue'
import MoviePage from './pages/MoviePage.vue'

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/search", component: SearchPage },
	{ path: "/categories", component: CategoriesPage },
	{ path: "/live", component: LivePage },
	{ path: "/movie", name: "movie", component: MoviePage },

];
export default routes;

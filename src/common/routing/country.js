	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncCountrySearch, AsyncCountryAdd, AsyncCountryEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'country/search', 'country/add', 'country/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/country',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncCountrySearch,
	    meta: {
	      name: 'Country',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addCountry',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncCountryAdd,
	    meta: {
	      name: 'Add Country',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editCountry/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncCountryEdit,
	    meta: {
	      name: 'Edit Country',
	      sidebarVisible: false
	    }
	  },
	]
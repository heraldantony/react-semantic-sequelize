	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncLocationSearch, AsyncLocationAdd, AsyncLocationEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'location/search', 'location/add', 'location/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/location',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncLocationSearch,
	    meta: {
	      name: 'Location',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addLocation',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncLocationAdd,
	    meta: {
	      name: 'Add Location',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editLocation/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncLocationEdit,
	    meta: {
	      name: 'Edit Location',
	      sidebarVisible: false
	    }
	  },
	]
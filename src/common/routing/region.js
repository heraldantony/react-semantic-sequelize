	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncRegionSearch, AsyncRegionAdd, AsyncRegionEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'region/search', 'region/add', 'region/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/region',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncRegionSearch,
	    meta: {
	      name: 'Region',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addRegion',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncRegionAdd,
	    meta: {
	      name: 'Add Region',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editRegion/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncRegionEdit,
	    meta: {
	      name: 'Edit Region',
	      sidebarVisible: false
	    }
	  },
	]
	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncJobSearch, AsyncJobAdd, AsyncJobEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'job/search', 'job/add', 'job/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/job',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncJobSearch,
	    meta: {
	      name: 'Job',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addJob',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncJobAdd,
	    meta: {
	      name: 'Add Job',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editJob/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncJobEdit,
	    meta: {
	      name: 'Edit Job',
	      sidebarVisible: false
	    }
	  },
	]
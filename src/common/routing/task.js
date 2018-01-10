	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncTaskSearch, AsyncTaskAdd, AsyncTaskEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'task/search', 'task/add', 'task/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/task',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncTaskSearch,
	    meta: {
	      name: 'Task',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addTask',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncTaskAdd,
	    meta: {
	      name: 'Add Task',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editTask/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncTaskEdit,
	    meta: {
	      name: 'Edit Task',
	      sidebarVisible: false
	    }
	  },
	]
	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncDepartmentSearch, AsyncDepartmentAdd, AsyncDepartmentEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'department/search', 'department/add', 'department/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/department',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncDepartmentSearch,
	    meta: {
	      name: 'Department',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addDepartment',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncDepartmentAdd,
	    meta: {
	      name: 'Add Department',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editDepartment/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncDepartmentEdit,
	    meta: {
	      name: 'Edit Department',
	      sidebarVisible: false
	    }
	  },
	]
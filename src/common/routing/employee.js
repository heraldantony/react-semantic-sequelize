	const [AsyncDashboard, AsyncLogin, AsyncSignup, AsyncLinks,
	  AsyncEmployeeSearch, AsyncEmployeeAdd, AsyncEmployeeEdit,
	  AsyncNotFound
	] = [
	  'Dashboard',
	  'Login',
	  'Signup',
	  'Links',
	  'employee/search', 'employee/add', 'employee/edit',
	  'NotFound'
	].map(a => asyncComponentCreator(a))

	const routes: Array < RouteItem > = [{
	    path: '/employee',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncEmployeeSearch,
	    meta: {
	      name: 'Employee',
	      icon: 'bookmark',
	      sidebarVisible: true
	    }
	  },
	  {
	    path: '/addEmployee',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncEmployeeAdd,
	    meta: {
	      name: 'Add Employee',
	      sidebarVisible: false
	    }
	  },
	  {
	    path: '/editEmployee/:id',
	    exact: true,
	    tag: RouteAuth,
	    canAccess: isLoggedIn,
	    component: AsyncEmployeeEdit,
	    meta: {
	      name: 'Edit Employee',
	      sidebarVisible: false
	    }
	  },
	]
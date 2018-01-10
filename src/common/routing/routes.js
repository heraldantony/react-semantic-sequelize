// @flow
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {asyncComponent} from 'react-async-component'
import { Loader, Dimmer, Header, Icon } from 'semantic-ui-react'
import RouteAuth from 'components/addons/RouteAuth'
import _ from 'lodash'
import {isLoggedIn} from 'api/LocalStorageCookiesSvc'
import type {RouteItem} from 'types'

function asyncComponentCreator (url) {
	return asyncComponent({
		// flow-disable-next-line: The parameter passed to import() must be a literal string
		resolve: () => import(/* webpackChunkName:"[index].[request]" */ `containers/${url}/index.jsx`),
		LoadingComponent () {
			return (
				<Dimmer active>
					<Loader size="large" active>
						Loading page...
					</Loader>
				</Dimmer>
			)
		},
		ErrorComponent () {
			return (
				<Dimmer active>
					<Header inverted as="h2" icon textAlign="center">
						<Icon name="refresh" />
						Refresh
						<Header.Subheader>Got error while loading page.</Header.Subheader>
					</Header>
				</Dimmer>
			)
		},
		autoResolveES2015Default: true,
		env: process.env.BROWSER ? 'browser' : 'node',
		serverMode: 'resolve'
	})
}

function routingFnCreator (useFor: 'sidebar' | 'routing' | 'meta' | 'all' = 'all') {
	const [AsyncDashboard, AsyncLogin, AsyncSignup,
	  AsyncEmployeeSearch, AsyncEmployeeAdd, AsyncEmployeeEdit,
	  AsyncDepartmentSearch, AsyncDepartmentAdd, AsyncDepartmentEdit,
	  AsyncJobSearch, AsyncJobAdd, AsyncJobEdit,
		AsyncTaskSearch, AsyncTaskAdd, AsyncTaskEdit,
		AsyncNotFound] = [
		'Dashboard',
		'Login',
		'Signup',
	  'employee/search', 'employee/add', 'employee/edit',
	  'department/search', 'department/add', 'department/edit',
	  'job/search', 'job/add', 'job/edit',
		'task/search', 'task/add', 'task/edit',
		'NotFound'
	].map(a => asyncComponentCreator(a))

	const sidebarExternalLinks = [
		{
			external: true,
			path: 'https://github.com/Metnew/suicrux',
			meta: {
				sidebarVisible: true,
				icon: 'github',
				name: 'Github'
			}
		}
	]

	const routes: Array<RouteItem> = [
		{
			path: '/',
			exact: true,
			tag: RouteAuth,
			canAccess: isLoggedIn,
			component: AsyncDashboard,
			meta: {
				icon: 'newspaper',
				name: 'Dashboard',
				sidebarVisible: true
			}
		},
		{
			path: '/auth',
			exact: true,
			tag: Route,
			component: AsyncLogin,
			meta: {
				name: 'Auth'
			}
		},
		{
			path: '/signup',
			exact: true,
			tag: Route,
			component: AsyncSignup,
			meta: {
				name: 'Signup'
			}
		}, {
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
		{
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
	  }, {
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
		{
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
			path: '/editTask',
			exact: true,
			tag: RouteAuth,
			canAccess: isLoggedIn,
			component: AsyncTaskEdit,
			meta: {
				name: 'Edit Task',
				sidebarVisible: false
			}
		},
		// Find the way to add/remove routes conditionally
		{
			tag: Route,
			component: AsyncNotFound,
			meta: {
				name: '404'
			}
		},
		{
			tag: Redirect,
			to: '/auth'
		}
	]

	const fns = {
		// Returns routing for sidebar menu
		sidebar (x: Array<RouteItem> = routes.concat(sidebarExternalLinks)) {
			return x
				.filter(a => a.meta && a.meta.sidebarVisible)
				.map(a => _.pick(a, ['path', 'meta', 'external', 'strict', 'exact']))
		},
		// Returns routing for React-Router
		routing (x: Array<RouteItem> = routes) {
			return x
				.filter(a => a.tag)
				.map(a =>
					_.pick(a, [
						'path',
						'strict',
						'exact',
						'component',
						'tag',
						'to',
						'canAccess'
					])
				)
		},
		// Returns `meta` + path. used in Header
		meta (x: Array<RouteItem> = routes) {
			return x
				.filter(a => a.tag)
				.map(a =>
					_.pick(a, [
						'path',
						'strict',
						'exact',
						'meta'
					])
				)
		},
		all () {
			return routes
		}
	}

	return fns[useFor]
}

export const getRoutes = routingFnCreator()
export const getMetaRoutes = routingFnCreator('meta')
export const getSidebarRoutes = routingFnCreator('sidebar')
export const getRouterRoutes = routingFnCreator('routing')

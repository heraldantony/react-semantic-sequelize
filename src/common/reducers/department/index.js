// @flow
import {
	fromJS
} from 'immutable'

import {

	DEPARTMENT_SEARCH_SUCCESS,
	DEPARTMENT_SEARCH_FAIL,

	DEPARTMENT_GET_SUCCESS,
	DEPARTMENT_GET_FAIL,

	DEPARTMENT_ADD_SUCCESS,
	DEPARTMENT_ADD_FAIL,

	DEPARTMENT_SAVE_SUCCESS,
	DEPARTMENT_SAVE_FAIL,

	DEPARTMENT_UPDATE_SUCCESS,
	DEPARTMENT_UPDATE_FAIL

} from 'actions/department'

import {
	APPLICATION_INIT
} from 'actions/common'

import type {

	DEPARTMENT_SEARCH_SUCCESS_TYPE,
	DEPARTMENT_SEARCH_FAIL_TYPE,

	DEPARTMENT_GET_SUCCESS_TYPE,
	DEPARTMENT_GET_FAIL_TYPE,

	DEPARTMENT_ADD_SUCCESS_TYPE,
	DEPARTMENT_ADD_FAIL_TYPE,

	DEPARTMENT_SAVE_SUCCESS_TYPE,
	DEPARTMENT_SAVE_FAIL_TYPE,

	DEPARTMENT_UPDATE_SUCCESS_TYPE,
	DEPARTMENT_UPDATE_FAIL_TYPE

} from 'actions/department'
import type {
	APPLICATION_INIT_TYPE
} from 'actions/common'

export type Department = {

  departmentName: string

}
export type State = {
  search: string,
  department: Department,
  departments: [Department],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchDepartments: [Department],
  error: Object
}

type Action = |
  APPLICATION_INIT_TYPE

  |
  DEPARTMENT_SEARCH_SUCCESS_TYPE |
  DEPARTMENT_SEARCH_FAIL_TYPE

  |
  DEPARTMENT_GET_SUCCESS_TYPE |
  DEPARTMENT_GET_FAIL_TYPE

  |
  DEPARTMENT_ADD_SUCCESS_TYPE |
  DEPARTMENT_ADD_FAIL_TYPE

  |
  DEPARTMENT_SAVE_SUCCESS_TYPE |
  DEPARTMENT_SAVE_FAIL_TYPE

  |
  DEPARTMENT_UPDATE_SUCCESS_TYPE |
  DEPARTMENT_UPDATE_FAIL_TYPE

export const initialState = {
	search: '',
	department: {},
	departments: [],
	start: 0,
	limit: 10,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchDepartments: [],
	error: ''
}

export function department (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState,
			...state
		}

	case DEPARTMENT_SEARCH_SUCCESS:
	{
		return { ...state,
			departments: action.payload
		}
	}
	case DEPARTMENT_SEARCH_FAIL:
	{
		return { ...state,
			error: action.error
		}
	}

	case DEPARTMENT_GET_SUCCESS:
	{
		return { ...state,
			department: action.payload
		}
	}
	case DEPARTMENT_GET_FAIL:
	{
		return { ...state,
			error: action.error
		}
	}

	case DEPARTMENT_ADD_SUCCESS:
	{
		return { ...state,
			department: action.payload
		}
	}
	case DEPARTMENT_ADD_FAIL:
	{
		return { ...state,
			error: action.error
		}
	}

	case DEPARTMENT_SAVE_SUCCESS:
	{
		return { ...state,
			department: action.payload
		}
	}
	case DEPARTMENT_SAVE_FAIL:
	{
		return { ...state,
			error: action.error
		}
	}

	case DEPARTMENT_UPDATE_SUCCESS:
	{
		return { ...state,
			department: action.payload
		}
	}
	case DEPARTMENT_UPDATE_FAIL:
	{
		return { ...state,
			error: action.error
		}
	}

	default:
		return state
	}
}

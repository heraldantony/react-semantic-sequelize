// @flow
import {
	awral
} from 'actions/utils'

import {
	tagSearchAPI,
	tagGetAPI,
	tagAddAPI,
	tagSaveAPI,
	tagUpdateAPI
} from 'api/TagSvc'
import {
	SubmissionError
} from 'redux-form'

export const TAG_SEARCH_SUCCESS = 'TAG_SEARCH_SUCCESS'
export const TAG_SEARCH_FAIL = 'TAG_SEARCH_FAIL'

export const TAG_GET_SUCCESS = 'TAG_GET_SUCCESS'
export const TAG_GET_FAIL = 'TAG_GET_FAIL'

export const TAG_ADD_SUCCESS = 'TAG_ADD_SUCCESS'
export const TAG_ADD_FAIL = 'TAG_ADD_FAIL'

export const TAG_SAVE_SUCCESS = 'TAG_SAVE_SUCCESS'
export const TAG_SAVE_FAIL = 'TAG_SAVE_FAIL'

export const TAG_UPDATE_SUCCESS = 'TAG_UPDATE_SUCCESS'
export const TAG_UPDATE_FAIL = 'TAG_UPDATE_FAIL'

export type TAG_SEARCH_SUCCESS_TYPE = {
  type: TAG_SEARCH_SUCCESS,
  payload: [Object]
}
export type TAG_SEARCH_FAIL_TYPE = {
  type: TAG_SEARCH_FAIL,
  payload: {
    errors: Object
  }
}

export type TAG_GET_SUCCESS_TYPE = {
  type: TAG_GET_SUCCESS,
  payload: Object
}
export type TAG_GET_FAIL_TYPE = {
  type: TAG_GET_FAIL,
  payload: {
    errors: Object
  }
}

export type TAG_ADD_SUCCESS_TYPE = {
  type: TAG_ADD_SUCCESS,
  payload: Object
}
export type TAG_ADD_FAIL_TYPE = {
  type: TAG_ADD_FAIL,
  payload: {
    errors: Object
  }
}

export type TAG_SAVE_SUCCESS_TYPE = {
  type: TAG_SAVE_SUCCESS,
  payload: Object
}
export type TAG_SAVE_FAIL_TYPE = {
  type: TAG_SAVE_FAIL,
  payload: {
    errors: Object
  }
}

export type TAG_UPDATE_SUCCESS_TYPE = {
  type: TAG_UPDATE_SUCCESS,
  payload: Object
}
export type TAG_UPDATE_FAIL_TYPE = {
  type: TAG_UPDATE_FAIL,
  payload: {
    errors: Object
  }
}

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralTagSearch = awral.of({
	pending: null,
	success ({
		payload,
		dispatch
	}) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({
				type: TAG_SEARCH_FAIL,
				errors: payload.message
			})
			throw new SubmissionError({
				_error: payload.message
			})
		} else {
			dispatch({
				type: TAG_SEARCH_SUCCESS,
				payload
			})
		}
	},
	fail ({
		payload,
		dispatch
	}) {
		dispatch({
			type: TAG_SEARCH_FAIL,
			errors: payload.message
		})
		throw new SubmissionError({
			_error: payload.message
		})
	}
})

export const TAG_SEARCH = awralTagSearch(tagSearchAPI)('TAG_SEARCH')

const awralTagGet = awral.of({
	pending: null,
	success ({
		payload,
		dispatch
	}) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({
				type: TAG_GET_FAIL,
				errors: payload.message
			})
			throw new SubmissionError({
				_error: payload.message
			})
		} else {
			dispatch({
				type: TAG_GET_SUCCESS,
				payload
			})
		}
	},
	fail ({
		payload,
		dispatch
	}) {
		dispatch({
			type: TAG_GET_FAIL,
			errors: payload.message
		})
		throw new SubmissionError({
			_error: payload.message
		})
	}
})

export const TAG_GET = awralTagGet(tagGetAPI)('TAG_GET')

const awralTagAdd = awral.of({
	pending: null,
	success ({
		payload,
		dispatch
	}) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({
				type: TAG_ADD_FAIL,
				errors: payload.message
			})
			throw new SubmissionError({
				_error: payload.message
			})
		} else {
			dispatch({
				type: TAG_ADD_SUCCESS,
				payload
			})
		}
	},
	fail ({
		payload,
		dispatch
	}) {
		dispatch({
			type: TAG_ADD_FAIL,
			errors: payload.message
		})
		throw new SubmissionError({
			_error: payload.message
		})
	}
})

export const TAG_ADD = awralTagAdd(tagAddAPI)('TAG_ADD')

const awralTagSave = awral.of({
	pending: null,
	success ({
		payload,
		dispatch
	}) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({
				type: TAG_SAVE_FAIL,
				errors: payload.message
			})
			throw new SubmissionError({
				_error: payload.message
			})
		} else {
			dispatch({
				type: TAG_SAVE_SUCCESS,
				payload
			})
		}
	},
	fail ({
		payload,
		dispatch
	}) {
		dispatch({
			type: TAG_SAVE_FAIL,
			errors: payload.message
		})
		throw new SubmissionError({
			_error: payload.message
		})
	}
})

export const TAG_SAVE = awralTagSave(tagSaveAPI)('TAG_SAVE')

const awralTagUpdate = awral.of({
	pending: null,
	success ({
		payload,
		dispatch
	}) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({
				type: TAG_UPDATE_FAIL,
				errors: payload.message
			})
			throw new SubmissionError({
				_error: payload.message
			})
		} else {
			dispatch({
				type: TAG_UPDATE_SUCCESS,
				payload
			})
		}
	},
	fail ({
		payload,
		dispatch
	}) {
		dispatch({
			type: TAG_UPDATE_FAIL,
			errors: payload.message
		})
		throw new SubmissionError({
			_error: payload.message
		})
	}
})

export const TAG_UPDATE = awralTagUpdate(tagUpdateAPI)('TAG_UPDATE')

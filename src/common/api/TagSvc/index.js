// @flow
import {
	get,
	post,
	put,
	patch
} from 'api/utils'

export async function tagSearchAPI (searchString) {
	return get('/tag?search=' + encodeURI(searchString))
}
export async function tagGetAPI (tagId) {
	return get('/tag/' + tagId)
}
export async function tagAddAPI (data) {
	return post('/tag', data)
}
export async function tagSaveAPI (data) {
	return put('/tag/' + data._id, data)
}
export async function tagUpdateAPI (data) {
	return patch('/tag/' + data._id, data)
}

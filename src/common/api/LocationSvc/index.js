// @flow
import {
	get,
	post,
	put,
	patch
} from 'api/utils'

export async function locationSearchAPI (searchString) {
	return get('/location?search=' + encodeURI(searchString))
}
export async function locationGetAPI (locationId) {
	return get('/location/' + locationId)
}
export async function locationAddAPI (data) {
	return post('/location', data)
}
export async function locationSaveAPI (data) {
	return put('/location/' + data._id, data)
}
export async function locationUpdateAPI (data) {
	return patch('/location/' + data._id, data)
}

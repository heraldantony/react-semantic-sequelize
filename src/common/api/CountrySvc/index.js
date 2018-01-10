// @flow
import {
	get,
	post,
	put,
	patch
} from 'api/utils'

export async function countrySearchAPI (searchString) {
	return get('/country?search=' + encodeURI(searchString))
}
export async function countryGetAPI (countryId) {
	return get('/country/' + countryId)
}
export async function countryAddAPI (data) {
	return post('/country', data)
}
export async function countrySaveAPI (data) {
	return put('/country/' + data._id, data)
}
export async function countryUpdateAPI (data) {
	return patch('/country/' + data._id, data)
}

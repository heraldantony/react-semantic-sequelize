// @flow
import {
	get,
	post,
	put,
	patch
} from 'api/utils'

export async function departmentSearchAPI (searchString) {
	return get('/department?search=' + encodeURI(searchString))
}
export async function departmentGetAPI (departmentId) {
	return get('/department/' + departmentId)
}
export async function departmentAddAPI (data) {
	return post('/department', data)
}
export async function departmentSaveAPI (data) {
	return put('/department/' + data._id, data)
}
export async function departmentUpdateAPI (data) {
	return patch('/department/' + data._id, data)
}

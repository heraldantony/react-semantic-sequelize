// @flow
import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type {FormProps } from 'redux-form'
import {Grid, Header, Form, Button, Table} from 'semantic-ui-react'
import {FormattedMessage} from 'react-intl'
import { connect } from 'react-redux'
import {DateTime} from 'react-datetime'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import { DEPARTMENT_ADD } from 'actions/department'

type Props = FormProps

const fields = [

	{
		placeholder: 'Department Name',
		name: 'departmentName',
		label: 'Department Name',

		component: InputField
	}

]
class DepartmentAdd extends Component<Props, State> {
	render () {
		const {handleSubmit} = this.props
		return (
			<div>
				<Helmet>
					<title>Department</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button><Link to={{
								pathname: `/department`,
								state: {}
							}}>Search Department</Link></Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								{fields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button content="Add" icon="add" onClick={handleSubmit(values =>
										this.props.add({
											...values,
											action: 'add'
										}))}/>
								</div>
							</Form>

						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	async add (data) {
		console.log(data)
		return dispatch(DEPARTMENT_ADD(data))
	}
})

export default reduxForm({ form: 'DEPARTMENT_ADD_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(DepartmentAdd)
)

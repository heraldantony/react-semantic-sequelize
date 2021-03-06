// @flow
import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type {FormProps } from 'redux-form'
import {Grid, Header, Form, Button, Table} from 'semantic-ui-react'
import {FormattedMessage} from 'react-intl'
import { connect } from 'react-redux'
import InputField from 'components/elements/InputField'
import {DateTime} from 'react-datetime'
import TextAreaField from 'components/elements/TextAreaField'
import { JOB_GET, JOB_SAVE } from 'actions/job'
import { createStructuredSelector } from 'reselect'
import {makeSelectJob, makeSelectJobInitialValues} from 'selectors/job'

type Props = FormProps

const fields = [

	{
		placeholder: 'Job Title',
		name: 'jobTitle',
		label: 'Job Title',

		component: InputField
	},

	{
		placeholder: 'Min Salary',
		name: 'minSalary',
		label: 'Min Salary',

		component: InputField
	},

	{
		placeholder: 'Max Salary',
		name: 'maxSalary',
		label: 'Max Salary',

		component: InputField
	}

]
class JobEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(JOB_GET(this.props.match.params.id))
		}
	}

	render () {
		const {handleSubmit} = this.props
		return (
			<div>
				<Helmet>
					<title>Job</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button><Link to={{
								pathname: `/job`,
								state: {}
							}}>Search Job</Link></Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								{fields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button content="Save" icon="save" onClick={handleSubmit(values =>
										this.props.save({
											...values,
											action: 'save'
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
const mapStateToProps = state => createStructuredSelector({
	jobProps: makeSelectJob(),
	initialValues: makeSelectJobInitialValues()

}
)

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return dispatch(JOB_SAVE(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({ form: 'JOB_EDIT_FORM', enableReinitialize: true })(JobEdit)
)

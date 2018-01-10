// @flow
import React from 'react'
import {Helmet} from 'react-helmet'
import {Grid, Header} from 'semantic-ui-react'
import {FormattedMessage} from 'react-intl'

const Dashboard = () => {
	return (
		<div>
			<Helmet>
				<title>Dashboard</title>
			</Helmet>
			<Grid columns={1}>
				<Grid.Row centered>
					<Grid.Column width={16}>
						<Header as="h1">
							React, Semantic UI App
						</Header>
						<Header as="h2">
				A CRUD app using react, semantic ui, node, express, and sequelize
						</Header>

						<Header as="h2">
							Suicrux
						</Header>
						<p>
							<a href="https://github.com/Metnew/suicrux" target="_BLANK" rel="noopener noreferrer">https://github.com/Metnew/suicrux</a>
						</p>
							    <Header as="h2">
                            Semantic UI
						</Header>
						<p>
							<a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_BLANK" rel="noopener noreferrer">https://github.com/Semantic-Org/Semantic-UI-React</a>
						</p>

						<Header as="h2">
                            Sequelize ORM
						</Header>
						<p>
							<a href="https://github.com/sequelize" target="_BLANK" rel="noopener noreferrer">https://github.com/sequelize</a>
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}

export default Dashboard

/**
 * @flow
 * @file
 */
import express from 'express'
import chalk from 'chalk'
import 'babel-polyfill'
// Mount our server-side code to server
import server from './server'
import models from './models'

const app: express$Application = express()
const port: number = +process.env.PORT

server(app)

models.sequelize.sync().then(function () {
	app.listen(port, () => {
		console.log(
			chalk.green(`HTTP SERVER IS LISTENING ON http://localhost:${port}`)
		)
	})
})

/**
 * @flow
 * @file
 */
import express from 'express'
import chalk from 'chalk'
// Mount our server-side code to server
import server from '../../webpack_config/devServer'
import models from './models'

const app: express$Application = express()
const port: number = +process.env.PORT || 3000

server(app)

models.sequelize.sync().then(function() {
app.listen(port, () => {
	console.log(
		chalk.green(`SERVER IS LISTENING ON http://localhost:${port}`)
	)
})
})

module.exports = {
	olddevelopment: {
		dialect: 'sqlite',
		storage: './db.development.sqlite'
	},
	development: {
	    use_env_variable: 'DATABASE_URL',
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres'
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory:'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres'
	}
}

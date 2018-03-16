// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory2'
  },


  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
}
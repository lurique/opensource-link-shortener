/**
 * Create a connection to MongoDB
 * @param {string} mongoose mongoose function passed from Server.js
 * @param {string} username Database username from .env
 * @param {string} pass Database password from .env
 * @param {string} host Database host from .env
 * @param {string} port Database port from .env
 * @param {string} db Database selected from .env
 */
const DatabaseConnection = async(mongoose, username, pass, host, port, db) => {
  let url = `mongodb://${username}:${pass}@${host}:${port}/${db}`

  await mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log(`DATABASE: Connected on ${url} \r\n----------------------------------------------------------------\r\n`))
    .catch(err => console.log(`DATABASE: Error -> ${err}`))
}

export { DatabaseConnection as Conn }
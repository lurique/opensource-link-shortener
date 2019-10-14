const EnvironmentVariables = {
  APP_PORT: process.env.APP_PORT || "3030",
  APP_HOST: process.env.APP_HOST || "127.0.0.1",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "root",
  DB_HOST: process.env.DB_HOST || "127.0.0.1",
  DB_PORT: process.env.DB_PORT || "27017",
  DB_DATABASE: process.env.DB_DATABASE || "urlShortener"
}

export { EnvironmentVariables as Env }
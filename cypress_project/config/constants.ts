const NON_PRODUCTION_ENVIRONMENT = {
  environmentName: 'non-production',
  databaseName: 'team11_non_prod_db',
  urlFrontend: process.env.NON_PRODUCTION_URL
}

const SCREEN_SIZE = {
  width: 1920,
  height: 1080
}

const ADMIN_LOGIN = {
  email: 'tcunningham12@qub.ac.uk',
  password: process.env.ADMIN_LOGIN
}

const PRODUCTION_ENVIRONMENT = {
  environmentName: 'production',
  databaseName: 'team11_prod_db',
  urlFrontend: process.env.PRODUCTION_URL
}

export { PRODUCTION_ENVIRONMENT, NON_PRODUCTION_ENVIRONMENT, SCREEN_SIZE, ADMIN_LOGIN }

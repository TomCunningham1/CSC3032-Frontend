const NON_PRODUCTION_ENVIRONMENT = {
  environmentName: 'non-production',
  databaseName: 'team11_non_prod_db',
  urlFrontend: "https://ddgobieowwepc.cloudfront.net"
}

const SCREEN_SIZE = {
  width: 1920,
  height: 1080
}

const ADMIN_LOGIN = {
  email: 'tcunningham12@qub.ac.uk',
  password: process.env.ADMIN_PASSWORD || 'Passw()rd-1'
}

const PRODUCTION_ENVIRONMENT = {
  environmentName: 'production',
  databaseName: 'team11_prod_db',
  urlFrontend: "https://d1nr33ewpu0hmx.cloudfront.net"
}

export { PRODUCTION_ENVIRONMENT, NON_PRODUCTION_ENVIRONMENT, SCREEN_SIZE, ADMIN_LOGIN }

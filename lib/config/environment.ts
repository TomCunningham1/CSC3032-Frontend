
const environment = process.env.ENVIRONMENT || 'test'

interface EnvironmentConfigInterface {
    environmentName: string;
}

const testEnvironment: EnvironmentConfigInterface = {
    environmentName: "test"
}

const productionEnvironment: EnvironmentConfigInterface = {
    environmentName: "production"
}

class EnvironmentConfig {
    public constructor(envType: string) {

    }
}

export default new EnvironmentConfig(process.env.ENVIRONMENT || 'test');
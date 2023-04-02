import convict from 'convict';

const config = convict({
    env: {
        doc: '',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    port: {
        doc: 'The port our web server should be listening on.',
        format: 'port',
        default: 3000,
        env: 'PORT',
    },
    aws: {
        cognito: {
            userPoolId: {
                default: '',
                env: 'AWS_COGNITO_USER_POOL_ID',
            },
            clientId: {
                default: '',
                env: 'AWS_COGNITO_CLIENT_ID',
            },
        },
    },
});

const env = config.get('env');

const configPath =
    process.env.CONFIG_PATH || './apps/ownyourday-api/src/config';

config.loadFile(`${configPath}/config.${env}.json`);
config.validate({ allowed: 'strict' });

export default config;

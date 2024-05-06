// * could be sure that name are equal in .env.example file
export const EnvVariables = {
  appPort: 'APP_PORT',
  dbUser: 'DB_USER',
  dbPassword: 'DB_PASSWORD',
  dbName: 'DB_NAME',
  dbPort: 'DB_PORT',
  dbHost: 'DB_HOST',
} as const;

Object.freeze(EnvVariables);

export type TEnvVariables = keyof typeof EnvVariables;

export const ConfigServiceNames = {
  typeorm: 'typeorm',
};

Object.freeze(ConfigServiceNames);

export type TConfigServiceNames = keyof typeof ConfigServiceNames;

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbURL = process.env.DB_URL;

//const sequelize = new Sequelize(dbURL); // Example for postgres

const sequelize = new Sequelize(dbURL, {
    dialect: process.env.DB_DIALECT,
    protocol: process.env.DB_DIALECT,
    dialectOptions: {
        ssl: true,
        native: true,
    },
});

// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//     dialect: process.env.DB_DIALECT,
//     host: dbHost,
// });

export default sequelize;

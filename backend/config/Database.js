import { Sequelize } from "sequelize";

const db = new Sequelize('crud-javascript-gdsc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
import { Sequelize } from 'sequelize';

// DB_NAME = aict
// DB_USERNAME = postgres
// DB_PASSWORD = 954756
// DB_HOST = localhost
// DB_PORT = 5432
const sequelize = new Sequelize('aict', 'postgres', '954756', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;

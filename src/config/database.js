// configurar a conexão
import { Sequelize } from 'sequelize';

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize ({
            dialect: 'postgres',
            database: 'agenda_avaliacao',
            username: 'agenda_avaliacao_user',
            password: '1R3l50OsqDLtYXIVkgcMQZxABF9ByadN',
            host: 'dpg-dbqg7bajnfac738jqbng-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        });
    }
}

export default new Database();
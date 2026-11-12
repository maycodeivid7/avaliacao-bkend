import express from 'express'
import router from './src/router/cliente.js'
import database from './src/config/database.js';

const app = express();
app.use(express.json())

app.use("/api/cliente", router)

// Tenta conectar no banco e inicializar a API
database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000");
        })
    })
    .catch((e) => {
        console.log(e)
    })


import express from "express"
import ControllerCliente from '../controller/cliente.js'

const routerCliente = express.Router()

routerCliente.get("/buscar", ControllerCliente.Buscar)
routerCliente.get("/buscarUm/:id", ControllerCliente.BuscarUm)
routerCliente.post("/criar", ControllerCliente.Criar)
routerCliente.put("/alterar/:id", ControllerCliente.Alterar)
routerCliente.delete("/deletar/:id", ControllerCliente.Deletar)

export default routerCliente
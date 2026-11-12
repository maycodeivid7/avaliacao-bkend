import express from "express"
import ControllerAtendimento from '../controller/atendimento.js'

const routerAtendimento = express.Router()

routerAtendimento.get("/buscar", ControllerAtendimento.Buscar)
routerAtendimento.get("/buscarUm/:id", ControllerAtendimento.BuscarUm)
routerAtendimento.post("/criar", ControllerAtendimento.Criar)
routerAtendimento.put("/alterar/:id", ControllerAtendimento.Alterar)
routerAtendimento.delete("/deletar/:id", ControllerAtendimento.Deletar)

export default routerAtendimento
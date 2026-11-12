import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            const atendimentos = await ServiceAtendimento.Buscar()

            res.send({ atendimentos })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const atendimento = await ServiceAtendimento.BuscarUm(id)

            res.send({ atendimento })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            await ServiceAtendimento.Criar(dia, hora, valor, concluido)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            await ServiceAtendimento.Alterar(id, dia, hora, valor, concluido)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerAtendimento()
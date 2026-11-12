import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    async Buscar() {
        return Atendimento.findAll()
    }
    
    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Atendimento.findByPk(id)
    }
    
    async Criar(dia, hora, valor, concluido) {
        if(!dia) {
            throw new Error("Favor informar o dia")
        }
        if(!hora) {
            throw new Error("Favor informar a hora")
        }
        if(!valor) {
            throw new Error("Favor informar o valor")
        }
        if(concluido === undefined) {
            throw new Error("Favor informar se o atendimento foi concluído")
        }

        await Atendimento.create({dia, hora, valor, concluido})
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Atendimento não encontrado")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.hora = hora
        atendimentoAlterar.valor = valor
        atendimentoAlterar.concluido = concluido

        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await Atendimento.findByPk(id)

        if(!atendimentoDelete) {
            throw new Error("Favor informar o ID corretamente")
        }

        await atendimentoDelete.destroy()
    }
    
}

export default new ServiceAtendimento()
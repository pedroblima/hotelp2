import { HttpContext } from "@adonisjs/core/http";
import Atividade from "#models/atividade";

export default class AtividadesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Atividade.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Atividade.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome_atividade', 'descricao', 'preco', 'resort_id'])
        return await Atividade.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const atividade = await Atividade.findOrFail(params.id)
        const dados = request.only(['nome_atividade', 'descricao', 'preco', 'resort_id'])
        
        atividade.merge(dados)
        return await atividade.save()
    }

    async destroy({ params }: HttpContext) {
        const atividade = await Atividade.findOrFail(params.id)

        await atividade.delete()
        return { msg: 'Atividade deletada com sucesso', atividade }
    }
}

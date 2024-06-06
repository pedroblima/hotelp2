import { HttpContext } from "@adonisjs/core/http";
import Servico from "#models/servico";


export default class ServicosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Servico.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Servico.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome_servico', 'descricao', 'preco', 'resort_id'])
        return await Servico.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const servico = await Servico.findOrFail(params.id)
        const dados = request.only(['nome_servico', 'descricao', 'preco', 'resort_id'])

        servico.merge(dados)
        return await servico.save()
    }

    async destroy({ params }: HttpContext) {
        const servico = await Servico.findOrFail(params.id)

        await servico.delete()
        return { msg: 'Serviço deletado com sucesso', servico }
    }
}

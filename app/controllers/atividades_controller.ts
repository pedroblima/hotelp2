import { HttpContext } from "@adonisjs/core/http";
import Atividade from "#models/atividade";
import { createAtividadesValidator, updateAtividadesValidator } from "#validators/atividade";

export default class AtividadesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Atividade.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Atividade.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createAtividadesValidator.validate(request.all())
        const atividade = await Atividade.create(dados)
        return response.created(atividade)
    }

    async update({ params, request, response }: HttpContext) {
        const atividade = await Atividade.findOrFail(params.id)
        const dados = await updateAtividadesValidator.validate(request.all())
        
        atividade.merge(dados)
        await atividade.save()
        return response.ok(atividade)
    }

    async destroy({ params }: HttpContext) {
        const atividade = await Atividade.findOrFail(params.id)

        await atividade.delete()
        return { msg: 'Atividade deletada com sucesso', atividade }
    }
}

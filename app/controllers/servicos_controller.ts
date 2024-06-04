import { HttpContext } from "@adonisjs/core/http";
import Servico from "#models/servico";
import { createServicoValidator, updateServicoValidator } from "#validators/servico";


export default class ServicosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Servico.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Servico.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createServicoValidator.validate(request.all())
        const servico = await Servico.create(dados)
        return response.created(servico)
    }

    async update({ params, request, response }: HttpContext) {
        const servico = await Servico.findOrFail(params.id)
        const dados = await updateServicoValidator.validate(request.all())
        
        servico.merge(dados)
        await servico.save()
        return response.ok(servico)
    }


    async destroy({ params }: HttpContext) {
        const servico = await Servico.findOrFail(params.id)

        await servico.delete()
        return { msg: 'Serviço deletado com sucesso', servico }
    }
}

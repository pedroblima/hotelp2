import { HttpContext } from "@adonisjs/core/http";
import Hospede from "#models/hospede";
import { createHospedeValidator, updateHospedeValidator } from "#validators/hospede";

export default class HospedesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Hospede.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Hospede.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createHospedeValidator.validate(request.all())
        const hospede = await Hospede.create(dados)
        return response.created(hospede)
    }

    async update({ params, request, response }: HttpContext) {
        const hospede = await Hospede.findOrFail(params.id)
        const dados = await updateHospedeValidator.validate(request.all())
        
        hospede.merge(dados)
        await hospede.save()
        return response.ok(hospede)
    }


    async destroy({ params }: HttpContext) {
        const hospede = await Hospede.findOrFail(params.id)

        await hospede.delete()
        return { msg: 'Hóspede deletado com sucesso', hospede }
    }
}

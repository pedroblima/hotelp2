import { HttpContext } from "@adonisjs/core/http";
import Hospede from "#models/hospede";

export default class HospedesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Hospede.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Hospede.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'email', 'telefone', 'pais', 'data_check_in', 'data_check_out', 'resort_id'])
        return await Hospede.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const hospede = await Hospede.findOrFail(params.id)
        const dados = request.only(['nome', 'email', 'telefone', 'pais', 'data_check_in', 'data_check_out', 'resort_id'])

        hospede.merge(dados)
        return await hospede.save()
    }


    async destroy({ params }: HttpContext) {
        const hospede = await Hospede.findOrFail(params.id)

        await hospede.delete()
        return { msg: 'Hóspede deletado com sucesso', hospede }
    }
}

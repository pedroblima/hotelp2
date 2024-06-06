import { HttpContext } from "@adonisjs/core/http";
import Quarto from "#models/quarto";

export default class QuartosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Quarto.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Quarto.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['numero_quarto', 'tipo_quarto', 'capacidade', 'status', 'preco_por_noite', 'resort_id'])
        return await Quarto.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const quarto = await Quarto.findOrFail(params.id)
        const dados = request.only(['numero_quarto', 'tipo_quarto', 'capacidade', 'status', 'preco_por_noite', 'resort_id'])

        quarto.merge(dados)
        return await quarto.save()
    }

    async destroy({ params, response }: HttpContext) {
        const quarto = await Quarto.findOrFail(params.id)
        await quarto.delete()
        return response.ok({ msg: 'Quarto deletado com sucesso', quarto })
    }
}



import { HttpContext } from "@adonisjs/core/http";
import Quarto from "#models/quarto";
import { createQuartoValidator, updateQuartoValidator } from '#validators/quarto'

export default class QuartosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Quarto.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Quarto.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createQuartoValidator.validate(request.all())
        const quarto = await Quarto.create(dados)
        return response.created(quarto)
    }

    async update({ params, request, response }: HttpContext) {
        const quarto = await Quarto.findOrFail(params.id)
        const dados = await updateQuartoValidator.validate(request.all())
        
        quarto.merge(dados)
        await quarto.save()
        return response.ok(quarto)
    }

    async destroy({ params, response }: HttpContext) {
        const quarto = await Quarto.findOrFail(params.id)
        await quarto.delete()
        return response.ok({ msg: 'Quarto deletado com sucesso', quarto })
    }
}



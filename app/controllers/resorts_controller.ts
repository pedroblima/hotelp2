import { HttpContext } from "@adonisjs/core/http";
import Resort from "#models/resort";

export default class ResortsController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Resort.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Resort.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'endereco', 'classificacao', 'numero_quartos', 'taxa_ocupacao', 'taxa_media_por_noite', 'data_abertura'])
        return await Resort.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const resort = await Resort.findOrFail(params.id)
        const dados = request.only(['nome', 'endereco', 'classificacao', 'numero_quartos', 'taxa_ocupacao', 'taxa_media_por_noite', 'data_abertura'])
        
        resort.merge(dados)
        return await resort.save()
    }

    async destroy({ params }: HttpContext) {
        const resort = await Resort.findOrFail(params.id)

        await resort.delete()
        return { msg: 'Resort deletado com sucesso', resort }
    }
}

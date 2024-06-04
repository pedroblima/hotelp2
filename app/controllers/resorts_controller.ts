import { HttpContext } from "@adonisjs/core/http";
import Resort from "#models/resort";
import { createResortValidator, updateResortValidator } from "#validators/resort";

export default class ResortsController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Resort.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Resort.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createResortValidator.validate(request.all())
        const resort = await Resort.create(dados)
        return response.created(resort)
    }

    async update({ params, request, response }: HttpContext) {
        const resort = await Resort.findOrFail(params.id)
        const dados = await updateResortValidator.validate(request.all())
        
        resort.merge(dados)
        await resort.save()
        return response.ok(resort)
    }


    async destroy({ params }: HttpContext) {
        const resort = await Resort.findOrFail(params.id)

        await resort.delete()
        return { msg: 'Resort deletado com sucesso', resort }
    }
}

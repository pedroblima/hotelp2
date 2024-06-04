import { HttpContext } from "@adonisjs/core/http";
import Funcionario from "#models/funcionario";
import { createFuncionarioValidator, updateFuncionarioValidator } from "#validators/funcionario";

export default class FuncionariosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Funcionario.findOrFail(params.id)
    }

    async store({ request, response }: HttpContext) {
        const dados = await createFuncionarioValidator.validate(request.all())
        const funcionario = await Funcionario.create(dados)
        return response.created(funcionario)
    }

    async update({ params, request, response }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = await updateFuncionarioValidator.validate(request.all())
        
        funcionario.merge(dados)
        await funcionario.save()
        return response.ok(funcionario)
    }


    async destroy({ params }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)

        await funcionario.delete()
        return { msg: 'Funcionário deletado com sucesso', funcionario }
    }
}
